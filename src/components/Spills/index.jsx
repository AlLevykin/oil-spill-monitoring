import { Form, Button } from "react-bootstrap";
import Sattelite from "./Satellite";
import store from '../../store';

const Spills = ({ spill }) => {

    const suvHandler = (event) => {
        store.dispatch.transport.setSuv(event.target.checked);
    }

    const droneHandler = (event) => {
        store.dispatch.transport.setDrone(event.target.checked);
    }

    const helicopterHandler = (event) => {
        store.dispatch.transport.setHelicopter(event.target.checked);
    }

    const toastHandler = () => {
        store.dispatch.toast.setToast(true);
    }    

    return (
        <>
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
                <Form className="mb-2">
                    <Form.Check
                        type="checkbox"
                        label="Наземный транспорт"
                        onChange={(e) => suvHandler(e)}
                    >
                    </Form.Check>
                    <Form.Check
                        type="checkbox"
                        label="Беспилотный летательный аппарат"
                        onChange={(e) => droneHandler(e)}
                    >
                    </Form.Check>
                    <Form.Check
                        type="checkbox"
                        label="Вертолёт"
                        onChange={(e) => helicopterHandler(e)}
                    >
                    </Form.Check>
                </Form>
                <div className="row">
                    <div className="col">
                        <Button variant="outline-secondary w-100 mb-2" onClick={toastHandler}>
                            <span className="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                </svg>
                            </span>
                            Задание на проведение проверки
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spills