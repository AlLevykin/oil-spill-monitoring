import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Spills from '../Spills';
import { randomNumber } from '../../models/utils';
import store from '../../store';

const Sidebar = () => {

    useEffect(() => {
        store.dispatch.spills.getSpills();
    }, []);

    const items = useSelector(state => state.spills);
    const [current, setCurrent] = useState(0);

    const clickHandler = () => {
        setCurrent(randomNumber(0, items.length - 1))
        console.log(current);
    }

    return (
        <div className="sidebar position-fixed border border-light shadow rounded-3 ms-5 mt-5 p-2 bg-white">
            <div className="row mx-2">
                <div class="col-10">
                    <h4 className="text-secondary">Данные мониторинга</h4>
                </div>
                <div class="col-2">
                    <Button variant="outline-secondary" onClick={clickHandler}>
                        <span className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
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