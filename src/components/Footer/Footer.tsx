import { GitHubIcon } from '../../assets';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.text}>
                Built by <span>Alexey Hohlov</span> ©2024
            </div>
            <a
                className={styles.link}
                href='https://github.com/alexey-hohlov'
                target={'_blank'}
                rel={'noreferrer'}
            >
                <GitHubIcon />
                <span>alexey-hohlov</span>
            </a>
        </footer>
    );
};

export default Footer;
