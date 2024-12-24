import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            {/* Outlet div here */}
            <div>
                <Outlet></Outlet>
            </div>
            {/* Outlet div here */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;