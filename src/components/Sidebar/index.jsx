import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Spills from '../Spills';
import { randomNumber } from '../../models/utils';
import store from '../../store';

const Sidebar = () => {

    const items = useSelector(state => state.spills);
    const current = useSelector(state => state.currentSpill);

    const clickHandler = () => {
        store.dispatch.currentSpill.setCurrentSpill(randomNumber(0, items.length - 1))
    }

    const goToPointHandler = () => {
        if (items.length > 0) store.dispatch.map.goToPoint(items[current].lng, items[current].lat);
    }    

    return (
        <div className="sidebar position-fixed border border-light shadow rounded-3 ms-4 mt-4 p-2 bg-white">
            <div className="row">
                <div className="col-8">
                    {
                        items.length > 0 ? <h5>{items[current].company}</h5> : <></>
                    }
                </div>
                <div className="col-4 text-end">
                    <Button className="me-2" variant="outline-secondary btn-sm" onClick={clickHandler}>
                        <span className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                        </span>
                    </Button>
                    <Button variant="outline-secondary btn-sm" onClick={goToPointHandler}>
                        <span className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                        </span>
                    </Button>
                </div>
            </div>
            <hr></hr>
            {
                items.length > 0 ? <Spills spill={items[current]} /> : <></>
            }
        </div>
    )
}

export default Sidebar