//-----hooks-----//
import { useEffect } from 'react';

//-----style-----//
import './Modal.scss';

const Modal = (props) => {
    const { isOpen, onClose, children } = props;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };

    }, [isOpen]);

    return (
        <div
            className={`modal ${isOpen ? 'active' : ''}`}
            onClick={onClose ? onClose : null}>
            <div className="modal__content"
                onClick={(e) => e.stopPropagation()}>
                {children ? children : null}
            </div>
        </div>
    );
};

export default Modal;
