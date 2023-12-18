import { motion } from 'framer-motion';
import { GlassWrapper } from '../../components';
import styles from './Login.module.scss';
import { scale } from '../../utils/animations';

const Login: React.FC = () => {
    const MGlassWrapper = motion(GlassWrapper);

    return (
        <MGlassWrapper initial={'hidden'} animate={'visible'} variants={scale}>
            <div className={styles.login}>
                <motion.span className={styles.header}>Sign in</motion.span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim et, fugit expedita quo quos at maiores consequuntur
                    delectus qui magni odio sit, officiis iste fugiat molestiae
                    repudiandae aut facilis atque.
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas minus deserunt numquam soluta totam iusto ipsum
                    voluptates quos. Numquam, voluptates neque. Repellat harum
                    explicabo ab a eos, natus modi consequatur?
                </span>
            </div>
        </MGlassWrapper>
    );
};

export default Login;
