import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Greetings } from '../components';
import { Layout, Login, SignUp } from '../pages';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { element: <Greetings />, index: true },
                { path: 'login', element: <Login /> },
                { path: 'sign-up', element: <SignUp /> },
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
