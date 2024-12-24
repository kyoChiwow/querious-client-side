import loginAnimation from "../../assets/lottie/loginAnimation.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import Loading from "../Loading/Loading";

const Login = () => {
  const { loginUserEmail, setUser, googleLogin, loading, setLoading } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  if(loading) {
    return <Loading></Loading>;
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        setUser(user);
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged into your account!",
          icon: "success",
          willClose: () => {
            navigate(location?.state ? location.state : "/");
          },
        });
      })
      .catch((err) => {
        if (err.code === "auth/popup-closed-by-user") {
          return;
        }
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
        setLoading(false);
      })
      
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const gettingData = Object.fromEntries(formData.entries());

    // Signing in User here
    loginUserEmail(gettingData.email, gettingData.password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged into your account!",
          icon: "success",
          willClose: () => {
            navigate(location?.state ? location.state : "/");
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
        setLoading(false)
      });
  };
  return (
    <div>
      {/* Login Form div here */}
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse w-full gap-10">
            <Lottie animationData={loginAnimation}></Lottie>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email here"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password here"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-base">Login</button>
                </div>
                <div>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn btn-warning flex gap-2 w-full text-base"
                  >
                    <FcGoogle className="text-xl" /> Login With Google
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <p>
                    Already have an account?{" "}
                    <Link className="text-lg text-blue-500" to={"/register"}>
                      Register Here!
                    </Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Login Form div here */}
    </div>
  );
};

export default Login;
