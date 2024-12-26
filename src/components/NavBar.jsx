import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "/public/logo.webp";

const NavBar = () => {
  const { user, userLogOut } = useAuth();
  const location = useLocation();
  const hideLocation = location.pathname === "/queries";
  const { setSearchTerm } = useAuth();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogOut = () => {
    userLogOut();
  };

  const withoutUserLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/queries"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        Queries
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        Login
      </NavLink>
      <NavLink
        to={"/register"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        Register
      </NavLink>
    </>
  );
  const withUserLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/queries"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        Queries
      </NavLink>
      <NavLink
        to={"/recommendme"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        Recommendation For Me
      </NavLink>
      <NavLink
        to={"/myqueries"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        My Queries
      </NavLink>
      <NavLink
        to={"/myrecommendation"}
        className={({ isActive }) =>
          isActive
            ? "text-[#ff7519] font-bold text-lg"
            : "text-white font-bold text-lg"
        }
      >
        My Recommendation
      </NavLink>

      <div className="md:hidden gap-4 items-center flex my-4">
        <img
          className="w-[60px] h-[60px] rounded-full object-cover"
          src={user?.photoURL}
          alt=""
        />
        <p className="font-bold text-white text-base">
          Hi, {user?.displayName}
        </p>
      </div>

      <button
        onClick={handleLogOut}
        className={"text-white font-bold text-lg text-left"}
      >
        Logout
      </button>
    </>
  );
  return (
    <div>
      {/* Navbar top part */}
      <div className="bg-[#1D1D1D] py-2">
        {/* Top part inside div */}
        <div className="lg:max-w-[85%] mx-auto space-x-10 hidden lg:block">
          {user ? withUserLinks : withoutUserLinks}
        </div>
        {/* Top part inside div */}

        {/* Dropdown Menu div */}
        <div className="lg:hidden block">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1D1D1D] rounded-box z-[1] mt-3 w-56 p-2 shadow ml-2"
            >
              {user ? withUserLinks : withoutUserLinks}
            </ul>
          </div>
        </div>
        {/* Dropdown Menu div */}
      </div>
      {/* Navbar top part */}

      {/* Navbar bottom Part */}
      <div className="bg-[#ff7519] px-2 lg:px-0">
        {/* Bottom part div */}
        <div className="lg:max-w-[85%] mx-auto py-4 flex justify-between items-center">
          {/* Bottom Header and Logo part */}
          <div className="flex items-center gap-4">
            <div>
              <img className="h-[80px] rounded-full" src={logo} alt="" />
            </div>

            <div className="hidden lg:block">
              <h1 className="text-white font-bold text-4xl">Querious</h1>
            </div>
          </div>
          {/* Bottom Header and Logo part */}

          {/* Bottom Search Bar Part */}
          <div className="lg:w-[40%]">
            <label className="input input-bordered flex items-center gap-2 pr-0">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                disabled={!hideLocation}
                onChange={handleSearchChange}
              />
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

          {/* Bottom User icon and name part */}
          <div>
            {user?.email ? (
              <div className="md:flex gap-4 items-center hidden">
                <img
                  className="w-[60px] h-[60px] rounded-full object-cover"
                  src={user?.photoURL}
                  alt=""
                />
                <p className="font-bold text-white text-base">
                  Hi, {user?.displayName}
                </p>
              </div>
            ) : (
              <div>
                <p className="font-bold text-white text-base">Please Login</p>
              </div>
            )}
          </div>
          {/* Bottom User icon and name part */}
        </div>
        {/* Bottom part div */}
      </div>
      {/* Navbar bottom Part */}
    </div>
  );
};

export default NavBar;
