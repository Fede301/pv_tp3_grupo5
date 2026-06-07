import react from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const RegistroActividad = ({ fecha, mostrarCartel, setMostrarCartel }) => {
    return (
        <ToastContainer position={"bottom-end"} className='mb-5 mx-3'>
            <Toast bg={"primary"} onClose={() => setMostrarCartel(false)} show={mostrarCartel} delay={2500} autohide>
                <Toast.Body>{fecha}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
export default RegistroActividad;