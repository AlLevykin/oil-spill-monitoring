import { useSelector } from 'react-redux';
import { Toast } from "react-bootstrap";
import store from '../../store';

const SpillToast = () => {

    const showToast = useSelector(state => state.toast);
    const items = useSelector(state => state.spills);
    const current = useSelector(state => state.currentSpill);

    const toastHandler = () => {
        store.dispatch.toast.setToast(false);
    }

    return (
        <div class="toast-container position-absolute top-0 start-50 translate-middle-x p-3">
            <Toast onClose={toastHandler} show={showToast} delay={3000} autohide>
                <Toast.Header>
                    {
                        items.length > 0 ? <>
                            <strong className="me-auto">{items[current].licenseName}</strong>
                            <small className="text-muted">{items[current].licenseId}</small>
                        </> : <></>
                    }
                </Toast.Header>
                <Toast.Body>
                    Задание на проведение проверки направлено исполнителю.
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default SpillToast;