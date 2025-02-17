import Lottie from "lottie-react";
import updateAnimation from "../../assets/lottie/website-maintenance.json";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateQuery = () => {
  const loader = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    _id,
    productName,
    productPhoto,
    productBrand,
    queryReason,
    queryTitle,
  } = loader;

  const handleQueryUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedQueryData = Object.fromEntries(formData.entries());

    const fullUpdatedQueryData = {
      ...updatedQueryData,
      userEmail: user?.email,
      userName: user?.displayName,
      userProfilePicture: user?.photoURL,
      recommendationCount: 0,
      createdAt: Date.now(),
    };

    axiosSecure
      .patch(`/updatequery/${_id}`, fullUpdatedQueryData)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully updated your query!",
          icon: "success",
          willClose: () => {
            navigate("/myqueries");
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
      {/* Update Header div */}
      <div className="mt-10">
        <h1 className="text-4xl text-center font-bold">Update Your Query</h1>
        <p className="text-lg text-center mt-4 font-semibold">
          Please fill out the form below to update your existing query, make
          sure to give proper informatio
        </p>
      </div>
      {/* Update Header div */}

      {/* Banner Lottie Animation div */}
      <div className="max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
        <Lottie animationData={updateAnimation}></Lottie>
      </div>
      {/* Banner Lottie Animation div */}

      {/* Update Form div here */}
      <div>
        <div className="card bg-base-100 w-full max-w-screen-md xl:max-w-screen-lg shrink-0 shadow-2xl mx-auto mt-10">
          <form onSubmit={handleQueryUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                name="productName"
                defaultValue={productName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Brand</span>
              </label>
              <input
                type="text"
                placeholder="Enter Product Brand"
                name="productBrand"
                defaultValue={productBrand}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter Product Photo URL"
                name="productPhoto"
                defaultValue={productPhoto}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Query Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter Query Title"
                name="queryTitle"
                defaultValue={queryTitle}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Boycotting Reason Details</span>
              </label>
              <input
                type="text"
                placeholder="Enter the reason why you do not want this product"
                name="queryReason"
                defaultValue={queryReason}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-lg">Update Query</button>
            </div>
          </form>
        </div>
      </div>
      {/* Update Form div here */}
    </div>
  );
};

export default UpdateQuery;
