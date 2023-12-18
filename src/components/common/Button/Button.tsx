import { forwardRef } from 'react';
import styles from './Button.module.scss';

type Colors = 'white';
type Ref = HTMLButtonElement;

interface Props {
    title: string;
    color: Colors;
    onClick: () => void;
}

const Button = forwardRef<Ref, Props>(({ title, color, onClick }, ref) => {
    return (
        <button
            ref={ref}
            className={`${styles.button} ${styles[color]}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
});

export default Button;
