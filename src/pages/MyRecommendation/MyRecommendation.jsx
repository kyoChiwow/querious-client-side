import Lottie from "lottie-react";
import downArrow from "../../assets/lottie/down-arrow.json";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyRecommendation = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/products?email=${user.email}`).then((res) => {
      setRecommendations(res.data);
    });
  }, [axiosSecure, user.email]);
  return (
    <div>
      {/* Header div here */}
      <div className="mt-10 p-2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-center">My Recommendation</h1>
          <Lottie className="w-20" animationData={downArrow}></Lottie>
        </div>
        <p className="text-center text-lg font-semibold mt-4">
          In this page you will all the recommendation that you have given, You
          can check them out and also delete them if you want!
        </p>
      </div>
      {/* Header div here */}

      {/* Table div here */}
      <div className="min-h-screen">
        <div className="mt-8 bg-base-300">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Recommend created on</th>
                  <th>Recommended product</th>
                  <th>Recommended title</th>
                  <th>Query product name</th>
                  <th>Query created by</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {recommendations.map((recommend, idx) => (
                    <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recommend.currentTimeStamp}</td>
                    <td>{recommend.recommendName}</td>
                    <td>{recommend.recommendTitle}</td>
                    <td>{recommend.productName}</td>
                    <td>{recommend.userName}</td>
                  </tr>
                ))}
                {/* row 1 */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Table div here */}
    </div>
  );
};

export default MyRecommendation;
