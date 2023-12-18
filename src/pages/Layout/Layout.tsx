import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
    return (
        <section className={styles.layout}>
            <div className={styles.content}>
                <Outlet />
            </div>
        </section>
    );
};

export default Layout;
