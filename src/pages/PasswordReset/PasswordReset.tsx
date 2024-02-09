import styles from './PasswordReset.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, GlassWrapper, Input, ResetDialog } from '../../components';
import { motion } from 'framer-motion';
import { appear, scale, slideFromBottom } from '../../utils/animations';
import { validations } from '../../utils/validations';
import { resetValues } from '../../utils/defaultValues';
import { authenticationSlice } from '../../store/reducers/authenticationReducer';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { IPasswordData } from '../../types/storeTypes';

const MGlassWrapper = motion(GlassWrapper);
const MInput = motion(Input);
const MButton = motion(Button);

const PasswordReset: React.FC = () => {
    const methods = useForm({
        mode: 'onSubmit',
        defaultValues: resetValues,
    });
    const { setDialog, setPasswordData } = authenticationSlice.actions;
    const dispatch = useAppDispatch();

    const handleSubmit = (data: IPasswordData) => {
        dispatch(setPasswordData(data.email));
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
                                Enter your user account's verified email address
                                and we will send you a password reset link.
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
            <ResetDialog />
        </>
    );
};

export default PasswordReset;
