import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";
import recommendAnimation from "../../assets/lottie/shopping-options.json";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import RecommendCard from "../../components/RecommendCard";

const ViewDetails = () => {
  const loader = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [recommendations, setRecommendations] = useState([]);
  const {
    _id,
    productName,
    productBrand,
    productPhoto,
    queryReason,
    queryTitle,
    recommendationCount,
    userName,
    userEmail,
    userProfilePicture,
  } = loader;

  useEffect(() => {
    axiosSecure.get(`/products?id=${_id}`)
    .then((res) => {
      setRecommendations(res.data);
    });
  }, [_id, axiosSecure]);

  const handleRecommendForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const recommendForm = Object.fromEntries(formData.entries());

    const fullRecommendForm = {
      ...recommendForm,
      queryId: _id,
      queryTitle: queryTitle,
      productName: productName,
      userEmail: userEmail,
      userName: userName,
      recommederName: user.displayName,
      recommenderEmail: user.email,
      currentTimeStamp: new Date().toLocaleDateString(),
    };

    axiosSecure
      .post("/products", fullRecommendForm)
      .then(() => {
        // Increment the recommendation count here
        axiosSecure.patch(`/updatequery/${_id}`);

        Swal.fire({
          title: "Success!",
          text: "You have successfully added your recommendation!",
          icon: "success",
          willClose: () => {
            window.location.reload();
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };
  return (
    <div>
      {/* Header info div here */}
      <div className="pt-[190px]">
        <h1 className="text-4xl font-bold text-center">Query Details</h1>
        <p className="text-lg font-semibold text-center mt-4">
          Check out the details of this particular query, You can only see the
          recommendation for this product and if you want you can give your own
          recommendation as well!
        </p>
      </div>
      {/* Header info div here */}

      {/* View details and all recommendation wrapping div here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[95%] xl:max-w-[80%] mx-auto mt-10">
        {/* View details card wrapping div */}
        <div className="bg-base-300 rounded-xl bg-opacity-60 shadow-xl p-4">
          {/* Image div */}
          <div className="flex justify-center">
            <img className="rounded-xl h-[500px]" src={productPhoto} alt={productName} />
          </div>
          {/* Image div */}

          {/* Card information div here */}
          <div className="bg-base-200 p-4 rounded-xl mt-5">
            <p className="text-lg my-4">
              Query Title:{" "}
              <span className="text-lg font-bold">{queryTitle}</span>
            </p>
            <p className="text-lg mb-4">
              Product Name:{" "}
              <span className="text-lg font-bold">{productName}</span>
            </p>
            <p className="text-lg mb-4">
              Product Brand:{" "}
              <span className="text-lg font-bold">{productBrand}</span>
            </p>
            <p className="text-lg mb-4">
              Query Detailed Reason:{" "}
              <span className="text-lg font-bold">{queryReason}</span>
            </p>
            <p className="text-lg mb-4">
              Query Created By:{" "}
              <span className="text-lg font-bold">{userName}</span>
            </p>
            <p className="text-lg mb-8">
              Recommendation Count:{" "}
              <span className="text-2xl font-bold">{recommendationCount}</span>
            </p>
            <p className="text-lg mb-4 flex gap-4 items-center">
              Query Creator Avatar:{" "}
              <img
                className="w-[100px] h-[100px] object-cover rounded-full"
                src={userProfilePicture}
                alt=""
              />
            </p>
          </div>
          {/* Card information div here */}
        </div>
        {/* View details card wrapping div */}

        {/* All recommendation div here */}
        <div>
          {recommendationCount > 0 ? (
            <div className="bg-base-300 bg-opacity-60 min-h-[300px] shadow-xl rounded-xl p-4 grid grid-cols-1 gap-10">
              {recommendations.map((recommend, idx) => <RecommendCard key={idx} recommend={recommend}></RecommendCard>)}
            </div>
          ) : (
            <div className="bg-base-300 bg-opacity-60 min-h-[300px] shadow-xl rounded-xl p-4">
              <p className="font-semibold text-lg">
                No recommendation has been added!
              </p>
            </div>
          )}
        </div>
        {/* All recommendation div here */}
      </div>

      {/* Recommendation Form div here */}
      <div className="mt-10">
        {/* Recommendation header div here */}
        <div>
          <h1 className="text-center text-4xl font-bold">Recommend Product</h1>
          <p className="mt-4 text-center font-semibold text-lg">
            Please fill out the form below, if you want to recommend this
            product. Please make sure to fill out the form with accurate
            information!
          </p>
        </div>
        {/* Recommendation header div here */}

        {/* Recommendation form div here */}
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[800px] lg:ml-10">
              <Lottie animationData={recommendAnimation}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm md:max-w-lg lg:max-w-sm xl:max-w-xl shrink-0 shadow-2xl">
              <form onSubmit={handleRecommendForm} className="card-body bg-base-100 rounded-xl">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recommendation Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Recommendation Title"
                    name="recommendTitle"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recommended Product Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Recommended Product Name"
                    name="recommendName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Recommended Product Photo
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Recommended Product Photo"
                    name="recommendPhoto"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recommendation Reason</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Recommendation Reason"
                    name="recommendReason"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#707070] text-white">
                    Add Recommendation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Recommendation form div here */}
      </div>
      {/* Recommendation Form div here */}
      {/* View details and all recommendation wrapping div here */}
    </div>
  );
};

export default ViewDetails;
