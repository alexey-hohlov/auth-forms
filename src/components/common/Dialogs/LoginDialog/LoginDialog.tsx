import { useAppSelector } from '../../../../hooks/reduxHooks';
import Modal from '../../Modal/Modal';

const LoginDialog = () => {
    const { dialog } = useAppSelector(state => state.authenticationReducer);

    return (
        <Modal isOpen={dialog}>
            <div>123</div>
        </Modal>
    );
};

export default LoginDialog;
