import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/login/Login';
import Prodcuts from './pages/products/Prodcuts';
import Qna from './pages/qna/Qna';
import Item from './pages/item/Item';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element:<LandingPage/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/qna",
        element: <Qna/>
      },
      {
        path: "/product/:id",
        element: <Prodcuts/>
      },
      {
        path: "/item/:id",
        element: <Item/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
