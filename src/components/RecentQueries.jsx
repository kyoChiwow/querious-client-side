import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import RecentQueriesCard from "./RecentQueriesCard";

const RecentQueries = () => {
  const [recentQueries, setRecentQueries] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/recentqueries").then((res) => {
      const sortedArray = res.data.sort((a, b) => b.createdAt - a.createdAt);
      setRecentQueries(sortedArray);
    });
  }, [axiosSecure]);
  return (
    <div>
        {/* Header div */}
        <div className="mt-10">
            <h1 className="text-4xl font-bold text-center">Recent Queries</h1>
        </div>
        {/* Header div */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 max-w-[95%] xl:max-w-[80%] mx-auto">
        {recentQueries.map((query, idx) => (
          <RecentQueriesCard key={idx} query={query}></RecentQueriesCard>
        ))}
      </div>
    </div>
  );
};

export default RecentQueries;
