import { motion } from 'framer-motion';
import { Button, GlassWrapper, Input } from '../../components';
import styles from './Login.module.scss';
import {
    appear,
    scale,
    slideFromLeft,
    slideFromRight,
} from '../../utils/animations';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
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
            <div className={styles.login}>
                <motion.span
                    className={styles.header}
                    variants={slideFromLeft}
                    custom={3}
                >
                    Sign in
                </motion.span>
                <FormProvider {...methods}>
                    <form className={styles.form}>
                        <MInput
                            label={'email'}
                            variants={slideFromRight}
                            custom={5}
                        />
                        <MInput
                            label={'password'}
                            variants={slideFromLeft}
                            custom={7}
                        />
                        <MButton
                            title={'Submit'}
                            color={'white'}
                            onClick={handleSubmit}
                            variants={scale}
                            custom={10}
                        />
                    </form>
                </FormProvider>
                <motion.div
                    variants={appear}
                    custom={13}
                    className={styles.signUp}
                >
                    New to our service?
                    <Link to={'/sign-up'}>Create an account</Link>
                </motion.div>
                <motion.div variants={appear} custom={14}>
                    <Link to={'/password-reset'}>Forgot password?</Link>
                </motion.div>
            </div>
        </MGlassWrapper>
    );
};

export default Login;
