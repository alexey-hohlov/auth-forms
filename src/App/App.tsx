import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Greetings } from '../components';
import { Layout, Login } from '../pages';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { element: <Greetings />, index: true },
                { path: 'login', element: <Login /> },
            ],
        },
    ]);

    return (
        <div className='app'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
