import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  // const {currentUser}=useContext(AuthContext);
  // console.log(currentUser);
  return (

    <RouterProvider router={router} />

  )
}
export default App
