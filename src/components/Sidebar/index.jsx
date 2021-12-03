import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
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
        setCurrent(randomNumber(0, items.length-1))
        console.log(current);
    }

    return (
        <div className="sidebar position-fixed border border-light shadow rounded-3 ms-5 mt-5 bg-white">
            <Row>
                <Col>
                    <h5 className="m-2 text-secondary text-center">Система мониторинга нефтеразливов</h5>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col className="m-2">
                    <Button variant="secondary" className="w-100" onClick={clickHandler}>
                        <span className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                        </span>
                        Обновить данные мониторинга
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        items.length > 0 ? <Spills spill={items[current]} /> : <></>
                    }                    
                </Col>
            </Row>
        </div>
    )
}

export default Sidebar