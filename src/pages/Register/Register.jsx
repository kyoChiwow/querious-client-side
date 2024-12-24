import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import registerAnimation from "../../assets/lottie/registerAnimation.json";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";

const Register = () => {
  const { createUserEmail, setUser, updateUser, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const gettingData = Object.fromEntries(formData.entries());

    // Testing the password here
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(gettingData.password)) {
      Swal.fire({
        title: "Error!",
        text: "Password should contain one Uppercase, Lowercase and atleast 6 characters",
        icon: "error",
      });
      return;
    }

    // Creating user here
    createUserEmail(gettingData.email, gettingData.password).then((result) => {
      const user = result.user;
      setUser(user);
      updateUser({
        displayName: gettingData.name,
        photoURL: gettingData.photourl,
      });
      Swal.fire({
        title: "Success!",
        text: "You have successfully created your account!",
        icon: "success",
        willClose: () => {
          navigate("/");
        },
      }).catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
        setLoading(false);
      })
      
    });
  };
  return (
    <div>
      {/* Registration Form div here */}
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row w-full gap-12">
            <div className="text-center lg:text-left">
              <Lottie animationData={registerAnimation}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
              <form onSubmit={handleRegister} className="card-body">
                <div>
                  <h1 className="text-4xl font-bold text-center">
                    Register here!
                  </h1>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username here"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    name="photourl"
                    placeholder="Enter your PhotoURL here"
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
                    name="password"
                    placeholder="Enter your password here"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-base">
                    Register
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <p>
                    Already have an account?{" "}
                    <Link className="text-lg text-blue-500" to={"/login"}>
                      Login Here!
                    </Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Registration Form div here */}
    </div>
  );
};

export default Register;
