import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import downArrow from "../../assets/lottie/down-arrow.json";
import MyQueryCard from "../../components/MyQueryCard";

const MyQueries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [queries, setQueries] = useState([]);

  const handleQueryDelete = (id) => {
    axiosSecure.delete(`/myquery/${id}`)
    .then(res => {
      if(res.data.deletedCount) {
        const remainingQuery = queries.filter(
        (query) => query._id !== id
        );
        setQueries(remainingQuery);
      }
    })
  }

  useEffect(() => {
    axiosSecure.get(`/myquery?email=${user.email}`)
    .then((res) => {
      const timeSortQuery = res.data.sort((a,b) => b.createdAt - a.createdAt);
      setQueries(timeSortQuery);
    });
  }, [user.email, axiosSecure]);

  return (
    <div>
      {/* Banner div here */}
      <div className="bg-queryBanner xl:h-[605px] bg-no-repeat bg-top md:bg-left xl:bg-top bg-cover md:bg-contain xl:bg-cover flex justify-end bg-[#f5f5f5] py-4">
        <div className="text-center flex flex-col justify-center h-full mr-2 md:mr-16 lg:mr-24 xl:mr-44">
          <Slide direction="down">
            <h1 className="xl:text-2xl lg:text-lg md:text-md text-xs mb-2">
              Want to add
            </h1>
          </Slide>
          <Slide direction="right">
            <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-sm mb-2">
              Your queries?
            </h1>
          </Slide>
          <Slide direction="left">
            <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-sm font-bold">
              Click below to get started
            </h1>
          </Slide>
          <Slide direction="up">
            <NavLink to={"/addqueries"}>
              <button className="btn bg-[#FF7519] hover:bg-[#1d1d1d] text-white text-xs md:text-lg md:mt-10 mt-8">
                Add Queries
              </button>
            </NavLink>
          </Slide>
        </div>
      </div>
      {/* Banner div here */}

      {/* Card div here */}
      <div className="mt-20">
        {/* Header div */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div>
            <h1 className="text-4xl xl:text-6xl font-bold">Your Queries</h1>
          </div>
          <div className="w-20">
            <Lottie animationData={downArrow}></Lottie>
          </div>
        </div>
        {/* Header div */}

        {/* Card div */}
        {queries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-10 mt-10">
            {queries.map((query, idx) => (
              <MyQueryCard 
              key={idx} 
              query={query}
              onDelete={handleQueryDelete}
              ></MyQueryCard>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <h1 className="text-3xl font-bold">No Query has been added!</h1>
            <NavLink to={"/addqueries"}>
              <button className="btn bg-[#FF7519] hover:bg-[#1d1d1d] text-white text-xs md:text-lg md:mt-10">
                Add Queries
              </button>
            </NavLink>
          </div>
        )}
        {/* Card div */}
      </div>
      {/* Card div here */}
    </div>
  );
};

export default MyQueries;
