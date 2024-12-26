import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MyQueries from "../pages/MyQueries/MyQueries";
import HomeLayout from "../Layouts/HomeLayout";
import AddQueries from "../pages/AddQueries/AddQueries";
import UpdateQuery from "../pages/UpdateQuery/UpdateQuery";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AllQueries from "../pages/AllQueries/AllQueries";
import MyRecommendation from "../pages/MyRecommendation/MyRecommendation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "myqueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/addqueries",
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatequery/:id",
        element: (
          <PrivateRoute>
            <UpdateQuery></UpdateQuery>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updatequery/${params.id}`),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updatequery/${params.id}`),
      },
      {
        path: "/myrecommendation",
        element: (
          <PrivateRoute>
            <MyRecommendation></MyRecommendation>
          </PrivateRoute>
        ),
      },
      {
        path: "/queries",
        element: <AllQueries></AllQueries>,
      },
    ],
  },
]);

export default router;
