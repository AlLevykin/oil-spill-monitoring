import { Col, Row, Button } from 'react-bootstrap';

const Spills = ({ spill }) => {

    return (
        <div className="spills">
            <form className="mx-2">
                <fieldset disabled>
                    <div className="mb-3">
                        <label className="form-label form-control-sm">Предприятие</label>
                        <input type="text" className="form-control form-control-sm" value={spill.company} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label form-control-sm">Лицензионный участок</label>
                        <Row>
                            <Col>
                                <input type="text" className="form-control form-control-sm" value={spill.licenseName} />
                            </Col>
                            <Col>
                                <input type="text" className="form-control form-control-sm" value={spill.licenseId} />
                            </Col>                            
                        </Row>
                    </div>
                    <legend>Данные мониторинга</legend>
                </fieldset>
            </form>
        </div>
    )
}

export default Spills