import { motion } from 'framer-motion';
import {
    Button,
    GlassWrapper,
    Input,
    LoginDialog,
    PasswordInput,
} from '../../components';
import styles from './Login.module.scss';
import {
    appear,
    scale,
    slideFromLeft,
    slideFromRight,
} from '../../utils/animations';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { validations } from '../../utils/validations';
import { loginValues } from '../../utils/defaultValues';
import { authenticationSlice } from '../../store/reducers/authenticationReducer';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { ILoginData } from '../../types/storeTypes';

const MGlassWrapper = motion(GlassWrapper);
const MInput = motion(Input);
const MButton = motion(Button);
const MPasswordInput = motion(PasswordInput);

const Login: React.FC = () => {
    const { setDialog, setLoginData } = authenticationSlice.actions;
    const dispatch = useAppDispatch();

    const methods = useForm({
        mode: 'onSubmit',
        defaultValues: loginValues,
    });

    const onSubmit = (data: ILoginData) => {
        dispatch(setLoginData(data));
        methods.reset();
        dispatch(setDialog(true));
    };

    return (
        <>
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
                        <form
                            className={styles.form}
                            onSubmit={methods.handleSubmit(onSubmit)}
                        >
                            <MInput
                                label={'email'}
                                variants={slideFromRight}
                                custom={5}
                                name={'email'}
                                validations={validations.email}
                            />
                            <MPasswordInput
                                label={'password'}
                                name={'password'}
                                validations={validations.password}
                                variants={slideFromLeft}
                                custom={7}
                            />
                            <MButton
                                title={'Submit'}
                                color={'white'}
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
            <LoginDialog />
        </>
    );
};

export default Login;
