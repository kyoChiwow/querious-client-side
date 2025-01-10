import { Fade } from "react-awesome-reveal";
import Slider from "../../components/Slider";
import RecentQueries from "../../components/RecentQueries";
import Faq from "../../components/Faq";
import Newsletter from "../../components/Newsletter";
import Reviews from "../../components/Reviews";

const HomePage = () => {
  return (
    <div>
      {/* Header div here */}
      <div className="pt-[190px] font-bold text-4xl text-center">
        <Fade delay={1e3} cascade damping={1e-1}>
          Welcome to Querious
        </Fade>
      </div>
      {/* Header div here */}

      <main>
        {/* Slider div */}
        <div>
          <Slider></Slider>
        </div>
        {/* Slider div */}

        {/* Recent Queries div */}
        <div>
          <RecentQueries></RecentQueries>
        </div>
        {/* Recent Queries div */}

        {/* FAQ div here */}
        <div className="mt-10">
          <Faq></Faq>
        </div>
        {/* FAQ div here */}

        {/* Reviews div here */}
        <div className="mt-10">
          <Reviews></Reviews>
        </div>
        {/* Reviews div here */}

        {/* Newsletter section */}
        <div className="mt-10 pb-10">
          <Newsletter></Newsletter>
        </div>
        {/* Newsletter section */}
      </main>
    </div>
  );
};

export default HomePage;
