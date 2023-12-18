import { ReactNode, forwardRef } from 'react';
import styles from './GlassWrapper.module.scss';

type Ref = HTMLDivElement;
interface Props {
    children: ReactNode;
}

const GlassWrapper = forwardRef<Ref, Props>(({ children }, ref) => {
    return (
        <div className={styles.wrapper} ref={ref}>
            {children}
        </div>
    );
});

export default GlassWrapper;
