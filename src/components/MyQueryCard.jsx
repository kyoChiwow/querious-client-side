import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const MyQueryCard = ({ query, onDelete }) => {
  const { _id, productName, productBrand, productPhoto, queryTitle } = query;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(_id);
        Swal.fire({
          title: "Deleted!",
          text: "Your query has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      {/* Card Wrapping div */}
      <div className="bg-[#707070] bg-opacity-90 rounded-xl shadow-xl p-4 h-[750px] flex flex-col justify-between">
        {/* Image div */}
        <div className="max-w-[350px]">
          <img
            className="rounded-xl h-[350px] w-full object-fill"
            src={productPhoto}
            alt={productName}
          />
        </div>
        {/* Image div */}

        {/* Infomation div */}
        <div className="bg-[#1d1d1d] h-[325px] flex flex-col justify-between p-2 mt-4 rounded-2xl shadow-xl">
          <p className="text-white mb-4 text-lg">
            Query Title: <span className="font-bold">{queryTitle}</span>
          </p>
          <p className="text-white mb-4 text-lg">
            Product Name: <span className="font-bold">{productName}</span>
          </p>
          <p className="text-white mb-4 text-lg">
            Product Brand: <span className="font-bold">{productBrand}</span>
          </p>
        </div>
        {/* Infomation div */}

        {/* Buttons Div */}
          <div className="flex justify-between mt-5">
            <NavLink to={`/viewdetails/${_id}`}>
              <button className="btn btn-sm bg-[#1d1d1d] text-white border-none hover:-translate-y-2 btn-outline">
                View Details
              </button>
            </NavLink>
            <NavLink to={`/updatequery/${_id}`}>
              <button className="btn btn-sm bg-[#ff7519] text-white border-none hover:-translate-y-2 btn-outline">
                Update
              </button>
            </NavLink>
            <button
              onClick={handleDelete}
              className="btn btn-sm bg-[#1d1d1d] text-white border-none hover:-translate-y-2 btn-outline"
            >
              Delete
            </button>
          </div>
        {/* Buttons Div */}
      </div>
      {/* Card Wrapping div */}
    </div>
  );
};

MyQueryCard.propTypes = {
  query: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default MyQueryCard;
