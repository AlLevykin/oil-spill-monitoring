import { Button } from 'react-bootstrap';

const Spills = ({ spill }) => {

    return (
        <div className="spills px-2">
            <h5 className="text-secondary">Предприятие</h5>
            <p>{spill.company}</p>
            <h5 className="text-secondary">Лицензионный участок</h5>
            <p>{spill.licenseName} ({spill.licenseId})</p>            
            <div className="row me-2">
                <div class="col-10 align-self-center">
                <h5 className="text-secondary">Вероятное загразнение</h5>
                    <p>{spill.lat}, {spill.lng}</p>
                </div>
                <div class="col-2">
                    <Button variant="secondary">
                        <span className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Spills