import { forwardRef, useState } from 'react';
import styles from './Input.module.scss';
import { IValidation } from '../../../types/formTypes';
import { useController } from 'react-hook-form';
import { motion } from 'framer-motion';
import { scale } from '../../../utils/animations';
import { ErrorIcon, HideIcon, ShowIcon } from '../../../assets';

type Ref = HTMLLabelElement;

interface Props {
    label: string;
    name: string;
    validations: IValidation;
}

const PasswordInput = forwardRef<Ref, Props>(
    ({ label, name, validations }, ref) => {
        const {
            field,
            fieldState: { error },
        } = useController({ name, rules: validations });

        const [isVisible, setVisible] = useState(false);

        const handleShow = () => {
            setVisible(!isVisible);
        };

        const trimInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(e.target.value.trim());
        };

        return (
            <label className={styles.wrapper} ref={ref}>
                {label}
                <div className={styles.container}>
                    <input
                        className={`${styles.input} ${error && styles.error}`}
                        {...field}
                        type={`${isVisible ? 'text' : 'password'}`}
                        onChange={trimInput}
                    />
                    {isVisible ? (
                        <HideIcon onClick={handleShow} />
                    ) : (
                        <ShowIcon onClick={handleShow} />
                    )}
                </div>
                {error && (
                    <motion.div className={styles.message} variants={scale}>
                        <ErrorIcon className={styles.icon} />
                        {error.message}
                    </motion.div>
                )}
            </label>
        );
    }
);

export default PasswordInput;
