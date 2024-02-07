import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { authenticationSlice } from '../../../store/reducers/authenticationReducer';
import styles from './LoginDialog.module.scss';
import Modal from '../../common/Modal/Modal';

const LoginDialog = () => {
    const { dialog } = useAppSelector(state => state.authenticationReducer);
    const { setDialog } = authenticationSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <Modal
            isOpen={dialog}
            onClose={() => {
                dispatch(setDialog(false));
            }}
        >
            {dialog && (
                <div>
                    <h1>Thank you</h1>
                </div>
            )}
        </Modal>
    );
};

export default LoginDialog;
