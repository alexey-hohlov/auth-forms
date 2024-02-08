import styles from './ResetDialog.module.scss';
import { Modal, Button } from '../../';
import { useAppSelector, useDialog } from '../../../hooks/reduxHooks';

const ResetDialog: React.FC = () => {
    const { dialog, data } = useAppSelector(
        state => state.authenticationReducer
    );

    const { handleClose } = useDialog();

    return (
        <Modal isOpen={dialog} onClose={handleClose}>
            <div className={styles.wrapper}>
                <p>We have sent a password reset link to your email 👌</p>
                <div>
                    Please go to your mailbox{' '}
                    <span>{data.passwordData.email}</span> and click the link to
                    set new password
                </div>
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

export default ResetDialog;
