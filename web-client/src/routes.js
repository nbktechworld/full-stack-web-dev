import React from 'react';
import App from './App';
import ResetPasswordForm from './components/reset-password-form';
import Messages from './pages/messages';
import Signup from './pages/signup';
import Signin from './pages/signin';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <div>Home Page</div>,
      },
      {
        path: '/reset-password',
        element: <ResetPasswordForm />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/signin',
        element: <Signin/>
      }
    ]
  },
];

export default routes;
