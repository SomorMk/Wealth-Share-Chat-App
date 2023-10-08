import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import firebaseConfig from './Firebase/firebaseConfig.jsx'
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './Pages/Welcome.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Upcomming from './Pages/Upcomming';
import Success from './Pages/Success';


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
  {
    path: "/success",
    element: <Success></Success>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
