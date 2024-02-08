import styles from './SignUpDialog.module.scss';
import { Modal, Button } from '../..';
import { useAppSelector, useDialog } from '../../../hooks/reduxHooks';

const SignUpDialog: React.FC = () => {
    const { dialog, data } = useAppSelector(
        state => state.authenticationReducer
    );
    const { handleClose } = useDialog();

    return (
        <Modal isOpen={dialog} onClose={handleClose}>
            <div className={styles.wrapper}>
                <h2>Thank you for Signing Up</h2>
                <div>
                    Welcome to our service, dear{' '}
                    <span>{`${data.signUpData.firstName} ${data.signUpData.lastName}`}</span>
                    , we are glad to see you 😀
                </div>

                <h3>You're Almost Done...</h3>
                <div>
                    A verification email was sent to:{' '}
                    <span>{data.signUpData.email}</span>
                </div>
                <p>
                    Go to your mailbox and click the link to activate your
                    account
                </p>
                <Button
                    title={'Got it 👍'}
                    color={'blue'}
                    onClick={handleClose}
                />
                <span className={styles.caption}>
                    *This pop-up is shown for demonstration purposes
                </span>
            </div>
        </Modal>
    );
};

export default SignUpDialog;
