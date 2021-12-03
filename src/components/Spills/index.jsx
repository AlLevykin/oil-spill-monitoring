import { Form } from "react-bootstrap"
import Sattelite from "./Satellite"

const Spills = ({ spill }) => {

    return (
        <div className="spills px-2">
            <h5 className="text-primary">Лицензионный участок</h5>
            <p>{spill.licenseName} ({spill.licenseId})</p>
            <h5 className="text-primary">Вероятное загразнение</h5>
            <div className="row me-2">
                <div className="col-6">
                    <p className="text-dark my-0"><strong>Район</strong></p>
                </div>
                <div className="col-6">
                    <p className="my-0">{spill.region}</p>
                </div>
            </div>
            <div className="row me-2">
                <div className="col-6">
                    <p className="text-dark my-0"><strong>Координаты</strong></p>
                </div>
                <div className="col-6">
                    <p className="my-0"><small>{spill.lat}, {spill.lng}</small></p>
                </div>
            </div>
            <div className="row me-2">
                <div className="col-6">
                    <p className="text-dark my-0"><strong>Тип загразнения</strong></p>
                </div>
                <div className="col-6">
                    <p className="my-0">{spill.spill}</p>
                </div>
            </div>
            <div className="row me-2">
                <div className="col-6">
                    <p className="text-dark"><strong>Площадь</strong></p>
                </div>
                <div className="col-6">
                    <p>{spill.S} Га</p>
                </div>
            </div>
            <Sattelite />
            <h5 className="text-primary mt-2">Средства натурного исследования</h5>
            <Form>
                <Form.Check
                    type="checkbox"
                    label="Наземный транспорт"
                >
                </Form.Check>
                <Form.Check
                    type="checkbox"
                    label="Беспилотный летательный аппарат"
                >
                </Form.Check>
                <Form.Check
                    type="checkbox"
                    label="Вертолёт"
                >
                </Form.Check>
            </Form>
        </div>
    )
}

export default Spills