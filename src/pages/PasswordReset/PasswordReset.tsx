import styles from './PasswordReset.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, GlassWrapper, Input } from '../../components';
import { motion } from 'framer-motion';
import { appear, scale, slideFromBottom } from '../../utils/animations';
import { validations } from '../../utils/validations';
import { resetValues } from '../../utils/defaultValues';

const PasswordReset: React.FC = () => {
    const MGlassWrapper = motion(GlassWrapper);
    const MInput = motion(Input);
    const MButton = motion(Button);
    const methods = useForm({
        mode: 'onSubmit',
        defaultValues: resetValues,
    });

    const handleSubmit = () => {};

    return (
        <MGlassWrapper
            initial={'hidden'}
            animate={'visible'}
            variants={scale}
            custom={1}
        >
            <div className={styles.password}>
                <motion.span
                    className={styles.header}
                    variants={slideFromBottom}
                    custom={3}
                >
                    Reset your password
                </motion.span>
                <FormProvider {...methods}>
                    <form
                        className={styles.form}
                        onSubmit={methods.handleSubmit(handleSubmit)}
                    >
                        <MInput
                            label={'email'}
                            variants={slideFromBottom}
                            custom={5}
                            validations={validations.email}
                            name={'email'}
                        />
                        <motion.p variants={appear} custom={7}>
                            Enter your user account's verified email address and
                            we will send you a password reset link.
                        </motion.p>
                        <MButton
                            title={'Send password reset email'}
                            color={'white'}
                            variants={scale}
                            custom={10}
                        />
                    </form>
                </FormProvider>
            </div>
        </MGlassWrapper>
    );
};

export default PasswordReset;
