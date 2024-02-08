import styles from './SignUp.tsx.module.scss';
import { motion } from 'framer-motion';
import {
    Button,
    GlassWrapper,
    Input,
    PasswordInput,
    PhoneInput,
    SignUpDialog,
} from '../../components';
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
import { validations } from '../../utils/validations';
import { signUpValues } from '../../utils/defaultValues';
import { authenticationSlice } from '../../store/reducers/authenticationReducer';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { ISignUpData } from '../../types/storeTypes';

const SignUp: React.FC = () => {
    const MGlassWrapper = motion(GlassWrapper);
    const MInput = motion(Input);
    const MPasswordInput = motion(PasswordInput);
    const MPhoneInput = motion(PhoneInput);
    const MButton = motion(Button);
    const { setDialog, setSignUpData } = authenticationSlice.actions;
    const dispatch = useAppDispatch();

    const methods = useForm({
        mode: 'onSubmit',
        defaultValues: signUpValues,
    });

    const confirmPassword = {
        ...validations.password,
        validate: (value: string) =>
            value === methods.watch('password') || "Passwords don't match",
    };

    const onSubmit = (data: ISignUpData) => {
        dispatch(setSignUpData(data));
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
                <div className={styles.signUp}>
                    <motion.span
                        className={styles.header}
                        variants={slideFromTop}
                        custom={3}
                    >
                        Sign up
                    </motion.span>
                    <FormProvider {...methods}>
                        <form
                            className={styles.form}
                            onSubmit={methods.handleSubmit(onSubmit)}
                        >
                            <div className={styles.name}>
                                <MInput
                                    label={'first name'}
                                    name={'firstName'}
                                    validations={validations.firstName}
                                    variants={slideFromLeft}
                                    custom={5}
                                />
                                <MInput
                                    label={'last name'}
                                    name={'lastName'}
                                    validations={validations.lastName}
                                    variants={slideFromRight}
                                    custom={5}
                                />
                            </div>
                            <MInput
                                label={'email'}
                                name={'email'}
                                validations={validations.email}
                                variants={slideFromBottom}
                                custom={7}
                            />
                            <MPhoneInput
                                label={'phone'}
                                name={'phone'}
                                validations={validations.phone}
                                variants={slideFromBottom}
                                custom={9}
                            />
                            <MPasswordInput
                                label={'password'}
                                name={'password'}
                                validations={validations.password}
                                variants={slideFromBottom}
                                custom={11}
                            />
                            <MPasswordInput
                                label={'confirm password'}
                                name={'confirmPassword'}
                                validations={confirmPassword}
                                variants={slideFromBottom}
                                custom={13}
                            />
                            <MButton
                                title={'Submit'}
                                color={'white'}
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
            <SignUpDialog />
        </>
    );
};

export default SignUp;
