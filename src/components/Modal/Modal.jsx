//-----react-dom-----//
import { createPortal } from 'react-dom';

//-----style-----//
import './Modal.scss';

const Modal = (props) => {
    const { isOpen, onClose, children } = props;

    return createPortal(
        <div
            className={`modal ${isOpen ? 'active' : ''}`}
            onClick={onClose ? onClose : null}>
            <div className="modal__content"
                onClick={(e) => e.stopPropagation()}>
                {children ? children : null}
            </div>
        </div>,
        document.getElementById('modal-root'),
    );
};

export default Modal;
