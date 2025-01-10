import Lottie from "lottie-react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import errorAnimation from "../../assets/lottie/connection-error.json";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <NavBar></NavBar>
      </div>
      {/* Navbar */}

      {/* Lottie Animation */}
      <div className="max-w-[800px] mx-auto pt-[190px] flex justify-center items-center min-h-screen">
        <Lottie animationData={errorAnimation}></Lottie>
        <div>
          <NavLink to={"/"}>
            <button className="btn btn-success">Go Back Home</button>
          </NavLink>
        </div>
      </div>
      {/* Lottie Animation */}

      {/* Footer */}
      <div className="mt-20">
        <Footer></Footer>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Error404;
