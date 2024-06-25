import React from 'react';
import App from './App';
import ResetPasswordForm from './components/reset-password-form';
import Messages from './pages/messages';

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
      }
    ]
  },
];

export default routes;
