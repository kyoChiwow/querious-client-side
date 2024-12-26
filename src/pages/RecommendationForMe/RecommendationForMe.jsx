import Lottie from "lottie-react";
import downArrow from "../../assets/lottie/down-arrow.json";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RecommendationForMe = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [myRecommendations, setMyRecommendations] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/recommendme?email=${user.email}`).then((res) => {
      setMyRecommendations(res.data);
    });
  }, [axiosSecure, user.email]);
  return (
    <div>
      {/* Header div */}
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4">
          <h1 className="text-4xl font-bold text-center">
            Recommendation For Me
          </h1>
          <Lottie className="w-20" animationData={downArrow}></Lottie>
        </div>
        <p className="text-lg text-center font-semibold mt-4">
          Here you will see recommendation for you, on your created query. With
          the help of this you can make better decision when buying!
        </p>
      </div>
      {/* Header div */}

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
                {myRecommendations.map((recommend, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recommend.currentTimeStamp}</td>
                    <td>{recommend.recommendName}</td>
                    <td>{recommend.recommendTitle}</td>
                    <td>{recommend.productName}</td>
                    <td>{recommend.recommederName}</td>
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

export default RecommendationForMe;
