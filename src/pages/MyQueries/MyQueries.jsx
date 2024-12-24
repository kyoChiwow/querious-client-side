import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const MyQueries = () => {
  return (
    <div>
      {/* Banner div here */}
      <div className="bg-queryBanner xl:h-[605px] bg-no-repeat bg-contain xl:bg-cover flex justify-end bg-[#f5f5f5]">
        <div className="text-center flex flex-col justify-center h-full bg-[#f5f5f5] mr-4 md:mr-16 lg:mr-24 xl:mr-44">
          <Slide direction="down">
            <h1 className="xl:text-2xl lg:text-lg md:text-md text-xs mb-2">Want to add</h1>
          </Slide>
          <Slide direction="right">
            <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-sm mb-2">Your queries?</h1>
          </Slide>
          <Slide direction="left">
            <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-sm font-bold">Click below to get started</h1>
          </Slide>
          <Slide direction="up">
            <NavLink to={"/addqueries"}>
              <button className="btn bg-[#FF7519] hover:bg-[#1d1d1d] text-white text-xs md:text-lg md:mt-10">
                Add Queries
              </button>
            </NavLink>
          </Slide>
        </div>
      </div>
      {/* Banner div here */}
    </div>
  );
};

export default MyQueries;
