import styles from './SignUp.tsx.module.scss';
import { motion } from 'framer-motion';
import { Button, GlassWrapper, Input } from '../../components';
import {
    appear,
    scale,
    slideFromBottom,
    slideFromLeft,
    slideFromRight,
    slideFromTop,
} from '../../utils/animations';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
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
            <div className={styles.signUp}>
                <motion.span
                    className={styles.header}
                    variants={slideFromTop}
                    custom={3}
                >
                    Sign up
                </motion.span>
                <FormProvider {...methods}>
                    <form className={styles.form}>
                        <div className={styles.name}>
                            <MInput
                                label={'first name'}
                                variants={slideFromLeft}
                                custom={5}
                            />
                            <MInput
                                label={'last name'}
                                variants={slideFromRight}
                                custom={5}
                            />
                        </div>
                        <MInput
                            label={'email'}
                            variants={slideFromBottom}
                            custom={7}
                        />
                        <MInput
                            label={'phone'}
                            variants={slideFromBottom}
                            custom={9}
                        />
                        <MInput
                            label={'password'}
                            variants={slideFromBottom}
                            custom={11}
                        />
                        <MInput
                            label={'confirm password'}
                            variants={slideFromBottom}
                            custom={13}
                        />
                        <MButton
                            title={'Submit'}
                            color={'white'}
                            onClick={handleSubmit}
                            variants={scale}
                            custom={16}
                        />
                    </form>
                </FormProvider>
                <motion.div
                    className={styles.login}
                    variants={appear}
                    custom={18}
                >
                    Already have an account?
                    <Link to={'/login'}>Sign in</Link>
                </motion.div>
            </div>
        </MGlassWrapper>
    );
};

export default SignUp;
