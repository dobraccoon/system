import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './components/Register/Register';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import Articles from './components/Articles/Articles';
import Users from './components/Users/Users';
import EditUser from './components/module/users_card/edit_user/EditUser';
import CreateUser from './components/module/users_card/create_user/CreateUser';
import Profile from './components/Profile/Profile';
import ErrorElement from './Error/ErrorElement';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App></App>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/login',
            element: <Auth></Auth>
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/articles',
            element: <Articles></Articles>,
        },
        {
            path: '/users',
            element: <Users></Users>,
        },
        {
            path: '/users/:userName',
            element: <EditUser></EditUser>,
        },
        {   
            path: '/users/create',
            element: <CreateUser></CreateUser>,
        },
        {
            path: '/myProfile',
            element: <Profile></Profile>,
        },
      ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
