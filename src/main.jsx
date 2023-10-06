import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Welcome from './Pages/Welcome.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Upcomming from './Pages/Upcomming';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome></Welcome>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signin",
    element: <Signup></Signup>,
  },
  {
    path: "/upcomming",
    element: <Upcomming></Upcomming>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
