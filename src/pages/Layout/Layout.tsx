import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { Footer } from '../../components';

const Layout: React.FC = () => {
    return (
        <section className={styles.layout}>
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer />
        </section>
    );
};

export default Layout;
