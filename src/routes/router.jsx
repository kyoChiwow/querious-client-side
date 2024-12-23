import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
  ]);

export default router;