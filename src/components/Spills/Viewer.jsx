import { useSelector } from 'react-redux';
import { Offcanvas, Image } from 'react-bootstrap';
import store from '../../store';

const Viewer = () => {

    const viewerState = useSelector(state => state.viewer);
    const handleClose = () => store.dispatch.viewer.hideViewer();

    return (
        <Offcanvas show={viewerState.show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="display-6">{viewerState.date}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image className="w-100" src={viewerState.img} thumbnail />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Viewer