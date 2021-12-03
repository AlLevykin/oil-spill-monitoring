import { Col, Row, Button } from "react-bootstrap"
import Spills from "../Spills"

const Sidebar = () => {

    return (
        <div className="sidebar position-fixed border border-light shadow rounded-3 ms-5 mt-5 bg-white">
            <Row>
                <Col>
                    <h5 className="m-2 text-secondary text-center">Система мониторинга нефтеразливов</h5>
                    <p>
                        <hr></hr>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="m-2">
                    <Button variant="secondary" className="w-100">
                        <span className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                        Начать мониторинг
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Spills />
                </Col>
            </Row>
        </div>
    )
}

export default Sidebar