import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface Props {
    children: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
    return (
        <div
            className={`${styles.modal} ${isOpen && styles.open}`}
            onClick={onClose}
        >
            <div className={`${styles.content} ${isOpen && styles.open}`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
