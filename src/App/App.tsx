import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Greetings } from '../components';
import styles from './App.module.scss';
import { Home } from '../pages';

function App() {
    const router = createBrowserRouter([{ path: '/', element: <Home /> }]);

    return (
        <div className={styles.app}>
            {/* <Greetings /> */}
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
