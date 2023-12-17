import { forwardRef } from 'react';
import styles from './Button.module.scss';

type Colors = 'white';
type Ref = HTMLButtonElement;

interface Props {
    title: string;
    color: Colors;
}

// const Button: React.FC<Props> = ({ title, color }) => {
//     return (
//         <button className={`${styles.button} ${styles[color]}`}>{title}</button>
//     );
// };

const Button = forwardRef<Ref, Props>(({ title, color }, ref) => {
    return (
        <button ref={ref} className={`${styles.button} ${styles[color]}`}>{title}</button>
    );
});

export default Button;
