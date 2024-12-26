import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AddQueries from "../pages/AddQueries/AddQueries";
import AllQueries from "../pages/AllQueries/AllQueries";
import Error404 from "../pages/Error404/Error404";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import MyQueries from "../pages/MyQueries/MyQueries";
import MyRecommendation from "../pages/MyRecommendation/MyRecommendation";
import RecommendationForMe from "../pages/RecommendationForMe/RecommendationForMe";
import Register from "../pages/Register/Register";
import UpdateQuery from "../pages/UpdateQuery/UpdateQuery";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

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
          fetch(
            `https://assignment-11-server-side-ten-beryl.vercel.app
/updatequery/${params.id}`
          ),
      },
      {
        path: "viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-ten-beryl.vercel.app
/updatequery/${params.id}`
          ),
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
    element: <Error404></Error404>,
  },
]);

export default router;
