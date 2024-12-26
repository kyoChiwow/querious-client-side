import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstanace = axios.create({
  baseURL: "https://assignment-11-server-side-ten-beryl.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userLogOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstanace.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        if (err.status === 401 || err.status === 403) {
          userLogOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(err);
      }
    );
  }, [navigate, userLogOut]);
  return axiosInstanace;
};

export default useAxiosSecure;
