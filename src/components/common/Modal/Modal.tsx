import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface Props {
    children: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
    const handleBubbling = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    };

    return (
        <div
            className={`${styles.modal} ${isOpen && styles.open}`}
            onClick={onClose}
        >
            <div
                className={`${styles.content} ${isOpen && styles.open}`}
                onClick={handleBubbling}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
