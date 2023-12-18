import { useNavigate } from 'react-router-dom';
import { Button } from '../';
import { appear, scale } from '../../utils/animations';
import styles from './Greetings.module.scss';
import { motion } from 'framer-motion';

const Greetings: React.FC = () => {
    const MButton = motion(Button);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('login');
    };

    return (
        <motion.div
            className={styles.greetings}
            initial={'hidden'}
            animate={'visible'}
        >
            <motion.span variants={appear} custom={3}>
                Hello
            </motion.span>
            <motion.span variants={appear} custom={9}>
                Welcome to our website
            </motion.span>
            <motion.span variants={appear} custom={14}>
                You have to sign in to continue...
            </motion.span>
            <MButton
                title={'Sign in'}
                color={'white'}
                variants={scale}
                custom={19}
                onClick={handleNavigate}
            />
        </motion.div>
    );
};

export default Greetings;
