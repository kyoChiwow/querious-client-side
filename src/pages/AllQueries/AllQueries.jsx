import Lottie from "lottie-react";
import downArrow from "../../assets/lottie/down-arrow.json";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AllQueriesCard from "../../components/AllQueriesCard";
import useAuth from "../../hooks/useAuth";

const AllQueries = () => {
  const axiosSecure = useAxiosSecure();
  const [queries, setQueries] = useState([]);
  const [gridColumns, setGridColumns] = useState(4);
  const { searchTerm } = useAuth();
  const [sortOrder, setSortOrder] = useState("descending");

  useEffect(() => {
    axiosSecure.get("/query").then((res) => {
      const queryTimeSort = res.data.sort((a, b) => b.createdAt - a.createdAt);
      setQueries(queryTimeSort);
    });
  }, [axiosSecure]);

  const handleSortChange = (order) => {
    setSortOrder(order);
    if (order === "ascending") {
      setQueries((prevQueries) =>
        [...prevQueries].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (order === "descending") {
      setQueries((prevQueries) =>
        [...prevQueries].sort((a, b) => b.createdAt - a.createdAt)
      );
    }
  };

  const searchedQueries = queries.filter((query) =>
    query.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGridChange = (columns) => {
    setGridColumns(columns);
  };

  return (
    <div className="max-w-[95%] xl:max-w-[80%] mx-auto min-h-screen">
      {/* Heading div */}
      <div className="pt-[190px]">
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
      <div className="flex items-center justify-end mt-5">
        <details className="dropdown">
          <summary className="btn btn-sm bg-[#1D1D1D] text-white hover:-translate-y-2 m-1">
            Sort by (time)
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <button onClick={() => handleSortChange("ascending")}>
                ascending
              </button>
            </li>
            <li>
              <button onClick={() => handleSortChange("descending")}>
                descending
              </button>
            </li>
          </ul>
        </details>
        <details className="dropdown">
          <summary className="btn btn-sm bg-[#1D1D1D] text-white hover:-translate-y-2 m-1">
            Layout
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-4">
            <button className={`btn`} onClick={() => handleGridChange(2)}>
              2-Column Grid
            </button>
            <button className={`btn`} onClick={() => handleGridChange(3)}>
              3-Column Grid
            </button>
            <button className={`btn`} onClick={() => handleGridChange(4)}>
              4-Column Grid
            </button>
          </ul>
        </details>
      </div>
      {/* Grid Layout Toggle Buttons */}

      {/* Query Card wrapping div */}
      <div
        className={`grid gap-5 mt-10 grid-cols-1 md:grid-cols-2 ${
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
