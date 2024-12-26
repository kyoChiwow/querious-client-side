import logo from "/public/logo.webp"
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#1D1D1D] text-primary-content p-10">
      <aside>
        <img className="w-[150px] rounded-full mb-8" src={logo} alt="" />
        <h1 className="text-5xl font-bold mb-4">Querious</h1>
        <p className="font-bold mb-2">
          Querious Product Recommendation Platform
          <br />
          Providing reliable service since 2007
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <NavLink className={"text-2xl"} to={"https://www.facebook.com/aronnorahman.shawpno/"}>
            <FaFacebook></FaFacebook>
          </NavLink>
          <NavLink className={"text-2xl"} to={"https://github.com/kyoChiwow"}>
            <FaGithub></FaGithub>
          </NavLink>
          <NavLink className={"text-2xl"} to={"https://www.linkedin.com/in/md-shafiqul-islam-87250b158/"}>
            <FaLinkedin></FaLinkedin>
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
