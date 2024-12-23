import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/register",
      element: <Register></Register>
    },
  ]);

export default router;