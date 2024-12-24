import Lottie from "lottie-react";
import queryAddAnimation from "../../assets/lottie/queryAddAnimation.json"
import useAuth from "../../hooks/useAuth";

const AddQueries = () => {
    const { user } = useAuth();

    const handleQueryForm = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target)
        const queryData = Object.fromEntries(formData.entries());
        
        // Creating a new query object with the user information
        const fullQueryData = {...queryData, 
            userEmail: user?.email,
            userName: user?.displayName,
            userProfilePicture: user?.photoURL,
            recommendationCount: 0,
            createdAt: Date.now(),
        }
        console.log(fullQueryData);
    }
  return (
    <div className="max-w-[95%] mx-auto">
      <header className="text-center">
        <h1 className="text-6xl font-bold mb-8">Welcome to Add Your Query</h1>
        <p className="text-lg font-semibold">
          Please fill up the form below, to add your product query. Please make
          sure to give your information correctly!
        </p>
      </header>

      {/* Product query form div here */}
      <div className="mt-10">
        <div className="xl:w-[30%] md:w-[50%] mx-auto">
            <Lottie animationData={queryAddAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-screen-md xl:max-w-screen-lg shrink-0 shadow-2xl mx-auto mt-10">
          <form onSubmit={handleQueryForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                name="productname"
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
                name="productbrand"
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
                name="productphoto"
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
                name="querytitle"
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
                name="queryreason"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-lg">Add Query</button>
            </div>
          </form>
        </div>
      </div>
      {/* Product query form div here */}
    </div>
  );
};

export default AddQueries;
