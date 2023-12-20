import styles from './PasswordReset.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, GlassWrapper, Input } from '../../components';
import { motion } from 'framer-motion';
import { appear, scale, slideFromBottom, slideFromLeft, slideFromRight } from '../../utils/animations';

const PasswordReset: React.FC = () => {
    const MGlassWrapper = motion(GlassWrapper);
    const MInput = motion(Input);
    const MButton = motion(Button);
    const methods = useForm();

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
                    <form className={styles.form}>
                        <MInput label='email' variants={slideFromBottom} custom={5}/>
                        <motion.p variants={appear} custom={7}>
                            Enter your user account's verified email address and
                            we will send you a password reset link.
                        </motion.p>
                        <MButton
                            title={'Send password reset email'}
                            color={'white'}
                            onClick={handleSubmit}
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
