import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Greetings } from '../components';
import { Layout, Login, PasswordReset, SignUp } from '../pages';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: 'auth-forms', element: <Greetings />, index: true },
                { path: 'auth-forms/login', element: <Login /> },
                { path: 'auth-forms/sign-up', element: <SignUp /> },
                {
                    path: 'auth-forms/password-reset',
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
