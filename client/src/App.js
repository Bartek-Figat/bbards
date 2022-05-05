import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { RegisterUserForm } from './componets/register';
import { Authentication } from './componets/auth';
import Main from './container/mainPage/main';
import { LoginForm } from './componets/login';
import { Admin } from './componets/admin';
import { ProtectedRoute } from './componets/protectedRoutes';
import { ROUTES } from './router/router';
import { AccountDetails } from './container/account/account.detsils';
import { Order } from './container/order/order';
import { WishList } from './container/wishlis/wishlist';

const token = localStorage.getItem('token') || null;
export const routes = [
  { path: `${ROUTES.HOME}`, element: <Main /> },
  { path: `${ROUTES.AUTH}`, element: <Authentication /> },
  {
    path: `${ROUTES.REGISTER}`,
    element: !!token ? <Navigate to={`${ROUTES.ADMIN}`} /> : <RegisterUserForm />,
  },
  {
    path: `${ROUTES.LOGIN}`,
    element: !!token ? <Navigate to={`${ROUTES.ADMIN}`} /> : <LoginForm />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: `${ROUTES.ADMIN}`,
        element: <Admin />,
        children: [
          { path: `${ROUTES.ACCOUNT}`, element: <AccountDetails />, index: true },
          { path: `${ROUTES.ACCOUNT_SETTING}`, element: <p>ACCOUNT_SETTING</p> },
          { path: `${ROUTES.CHANGE_PASSWORD}`, element: <p>CHANGE_PASSWORD</p> },
          { path: `${ROUTES.ORDERS}`, element: <Order /> },
          { path: `${ROUTES.ADDRESS}`, element: <p>ADDRESS</p> },
          { path: `${ROUTES.PAYMENT}`, element: <p>PAYMENT</p> },
          { path: `${ROUTES.HELP_CENTER}`, element: <p>HELP_CENTER</p> },
          { path: `${ROUTES.LEGAL_NOTICE}`, element: <p>LEGAL_NOTICE</p> },
          { path: `${ROUTES.NOTIFICATION}`, element: <p>NOTIFICATION</p> },
          { path: `${ROUTES.WISHLIST}`, element: <WishList /> },
        ],
      },
    ],
  },
];
const App = () => {
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default App;
