import { forwardRef } from 'react';
import styles from './Input.module.scss';
import { IValidation } from '../../../types/formTypes';
import { useController } from 'react-hook-form';
import { motion } from 'framer-motion';
import { scale } from '../../../utils/animations';
import { ErrorIcon } from '../../../assets';
import { useMask } from '@react-input/mask';

type Ref = HTMLLabelElement;

interface Props {
    label: string;
    name: string;
    validations: IValidation;
}

const Input = forwardRef<Ref, Props>(({ label, name, validations }, ref) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations });

    const inputRef = useMask({
        mask: '+7 (___) ___-__-__',
        replacement: { _: /\d/ },
    });

    return (
        <label className={styles.wrapper} ref={ref}>
            {label}
            <input
                className={`${styles.input} ${styles.phone} ${error && styles.error}`}
                type={'text'}
                {...field}
                ref={inputRef}
                placeholder='+7'
            />
            {error && (
                <motion.div className={styles.message} variants={scale}>
                    <ErrorIcon />
                    {error.message}
                </motion.div>
            )}
        </label>
    );
});

export default Input;
