import { NavLink } from "react-router-dom";

const MyQueries = () => {
  return (
    <div>

      {/* Banner div here */}
      <div className="bg-queryBanner h-[605px] bg-no-repeat bg-cover flex justify-end items-center">
        <div className="mr-44 text-center">
          <h1 className="text-2xl mb-2">Want to add</h1>
          <h1 className="text-6xl mb-2">Your queries?</h1>
          <h1 className="text-6xl font-bold">Click below to get started</h1>
          <NavLink to={"/addqueries"}><button className="btn bg-[#FF7519] hover:bg-[#1d1d1d] text-white text-lg mt-10">Add Queries</button></NavLink>
        </div>
      </div>
      {/* Banner div here */}
    </div>
  );
};

export default MyQueries;
