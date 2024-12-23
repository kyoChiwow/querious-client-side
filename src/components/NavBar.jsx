import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "/public/logo.webp";

const NavBar = () => {
  const { user } = useAuth();
  const withoutUserLinks = (
    <>
      <NavLink to={"/"} className={"text-white font-bold text-lg"}>Home</NavLink>
      <NavLink className={"text-white font-bold text-lg"}>Queries</NavLink>
      <NavLink to={"/login"} className={"text-white font-bold text-lg"}>Login</NavLink>
      <NavLink to={"/register"} className={"text-white font-bold text-lg"}>Register</NavLink>
    </>
  );
  const withUserLinks = (
    <>
      <NavLink to={"/"} className={"text-white font-bold text-lg"}>Home</NavLink>
      <NavLink className={"text-white font-bold text-lg"}>Queries</NavLink>
      <NavLink className={"text-white font-bold text-lg"}>
        Recommendation For Me
      </NavLink>
      <NavLink className={"text-white font-bold text-lg"}>My Queries</NavLink>
      <NavLink className={"text-white font-bold text-lg"}>
        My Recommendation
      </NavLink>
      <NavLink className={"text-white font-bold text-lg"}>Logout</NavLink>
    </>
  );
  return (
    <div>
      {/* Navbar top part */}
      <div className="bg-[#1D1D1D]">
        {/* Top part inside div */}
        <div className="lg:max-w-[85%] mx-auto space-x-3">
          {user ? withUserLinks : withoutUserLinks}
        </div>
        {/* Top part inside div */}
      </div>
      {/* Navbar top part */}

      {/* Navbar bottom Part */}
      <div className="bg-[#ff7519]">
        {/* Bottom part div */}
        <div className="lg:max-w-[85%] mx-auto py-4 flex justify-between items-center">
          {/* Bottom Header and Logo part */}
          <div className="flex items-center gap-4">
            <div>
              <img className="h-[80px] rounded-full" src={logo} alt="" />
            </div>

            <div>
              <h1 className="text-white font-bold text-4xl">Querious</h1>
            </div>
          </div>
          {/* Bottom Header and Logo part */}

          {/* Bottom Search Bar Part */}
          <div>
            <label className="input input-bordered flex items-center gap-2 pr-0">
              <input type="text" className="grow" placeholder="Search" />
              <button className="btn bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </div>
          {/* Bottom Search Bar Part */}
        </div>
        {/* Bottom part div */}
      </div>
      {/* Navbar bottom Part */}
    </div>
  );
};

export default NavBar;
