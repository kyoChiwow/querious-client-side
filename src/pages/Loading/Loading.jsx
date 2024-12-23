import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Loading = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>

      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-success"></span>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Loading;
