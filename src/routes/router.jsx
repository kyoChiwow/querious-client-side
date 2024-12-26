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
import RecommendationForMe from "../pages/RecommendationForMe/RecommendationForMe";
import Error404 from "../pages/Error404/Error404";

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
        path: "addqueries",
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "updatequery/:id",
        element: (
          <PrivateRoute>
            <UpdateQuery></UpdateQuery>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updatequery/${params.id}`),
      },
      {
        path: "viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updatequery/${params.id}`),
      },
      {
        path: "myrecommendation",
        element: (
          <PrivateRoute>
            <MyRecommendation></MyRecommendation>
          </PrivateRoute>
        ),
      },
      {
        path: "recommendme",
        element: (
          <PrivateRoute>
            <RecommendationForMe></RecommendationForMe>
          </PrivateRoute>
        ),
      },
      {
        path: "queries",
        element: <AllQueries></AllQueries>,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>
  }
]);

export default router;
