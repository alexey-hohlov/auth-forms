import { forwardRef } from 'react';
import styles from './Input.module.scss';
import { IValidation } from '../../../types/formTypes';
import { useController } from 'react-hook-form';
import { motion } from 'framer-motion';
import { scale } from '../../../utils/animations';
import { ErrorIcon } from '../../../assets';

type Ref = HTMLLabelElement;

interface Props {
    label: string;
    name: string;
    validations: IValidation;
    type?: 'password' | 'number';
}

const Input = forwardRef<Ref, Props>(
    ({ label, type, name, validations }, ref) => {
        const {
            field,
            fieldState: { error },
        } = useController({ name, rules: validations });

        const trimInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(e.target.value.trim());
        };

        return (
            <label className={styles.wrapper} ref={ref}>
                {label}
                <input
                    className={`${styles.input} ${error && styles.error}`}
                    type={type ? type : 'text'}
                    {...field}
                    onChange={trimInput}
                />
                {error && (
                    <motion.div className={styles.message} variants={scale}>
                        <ErrorIcon />
                        {error.message}
                    </motion.div>
                )}
            </label>
        );
    }
);

export default Input;
