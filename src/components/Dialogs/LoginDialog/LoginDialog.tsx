import { useAppSelector, useDialog } from '../../../hooks/reduxHooks';
import styles from './LoginDialog.module.scss';
import { Button, Modal } from '../../index';

const LoginDialog = () => {
    const { dialog, data } = useAppSelector(
        state => state.authenticationReducer
    );
    const { handleClose } = useDialog();

    return (
        <Modal isOpen={dialog} onClose={handleClose}>
            <div className={styles.wrapper}>
                <h2>Thank you for logging in</h2>
                <ul className={styles.list}>
                    <h3>data sent:</h3>
                    <li>
                        email:
                        <span>{data.loginData.email}</span>
                    </li>
                    <li>
                        password:
                        <span>{data.loginData.password}</span>
                    </li>
                </ul>
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

export default LoginDialog;
