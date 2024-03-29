import {
    RouterProvider,
    createHashRouter,
} from 'react-router-dom';
import { Greetings } from '../components';
import { Layout, Login, PasswordReset, SignUp } from '../pages';

function App() {
    const router = createHashRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { element: <Greetings />, index: true },
                { path: 'login', element: <Login /> },
                { path: 'sign-up', element: <SignUp /> },
                {
                    path: 'password-reset',
                    element: <PasswordReset />,
                },
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
