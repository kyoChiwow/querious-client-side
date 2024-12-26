import Lottie from "lottie-react";
import downArrow from "../../assets/lottie/down-arrow.json";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AllQueriesCard from "../../components/AllQueriesCard";
import useAuth from "../../hooks/useAuth";

const AllQueries = () => {
  const axiosSecure = useAxiosSecure();
  const [queries, setQueries] = useState([]);
  const [gridColumns, setGridColumns] = useState(3);
  const { searchTerm } = useAuth();


  useEffect(() => {
    axiosSecure.get("/query").then((res) => {
      const queryTimeSort = res.data.sort((a, b) => b.createdAt - a.createdAt);
      setQueries(queryTimeSort);
    });
  }, [axiosSecure]);

  const searchedQueries = queries.filter((query) => query.productName.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleGridChange = (columns) => {
    setGridColumns(columns);
  };

  return (
    <div>
      {/* Heading div */}
      <div className="mt-10">
        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-bold text-4xl">All Queries</h1>
          <Lottie className="w-20" animationData={downArrow}></Lottie>
        </div>
        <p className="font-semibold text-lg text-center mt-4">
          Here you will see all the queries we have to offer, But to view
          details and access other features you will have to login or create an
          account!
        </p>
      </div>
      {/* Heading div */}

      {/* Grid Layout Toggle Buttons */}
      <div className="lg:flex justify-center gap-4 mt-6 hidden">
        <button
          className={`btn ${
            gridColumns === 2 ? "btn-error" : "btn-primary btn-outline"
          }`}
          onClick={() => handleGridChange(2)}
        >
          2-Column Grid
        </button>
        <button
          className={`btn ${
            gridColumns === 3 ? "btn-error" : "btn-primary btn-outline"
          }`}
          onClick={() => handleGridChange(3)}
        >
          3-Column Grid
        </button>
        <button
          className={`btn ${
            gridColumns === 4 ? "btn-error" : "btn-primary btn-outline"
          }`}
          onClick={() => handleGridChange(4)}
        >
          4-Column Grid
        </button>
      </div>
      {/* Grid Layout Toggle Buttons */}

      {/* Query Card wrapping div */}
      <div
        className={`grid gap-10 max-w-[95%] xl:max-w-[80%] mx-auto mt-10 grid-cols-1 md:grid-cols-2 ${
          gridColumns === 2
            ? "lg:grid-cols-2"
            : gridColumns === 3
            ? "lg:grid-cols-3"
            : "lg:grid-cols-4"
        }`}
      >
        {searchedQueries.map((query, idx) => (
          <AllQueriesCard key={idx} query={query}></AllQueriesCard>
        ))}
      </div>
      {/* Query Card wrapping div */}
    </div>
  );
};

export default AllQueries;
