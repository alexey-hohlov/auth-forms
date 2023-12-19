import { forwardRef } from 'react';
import styles from './Input.module.scss';

type Ref = HTMLLabelElement;
interface Props {
    label: string;
}

const Input = forwardRef<Ref, Props>(({label}, ref) => {
    return (
        <label className={styles.wrapper} ref={ref}>
            {label}
            <input className={styles.input} type='text' />
        </label>
    );
});

export default Input;
