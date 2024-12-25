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
  }
  return (
    <div className="xl:max-w-[80%] max-w-[90%] mx-auto">
      {/* Card Wrapping div */}
      <div className="bg-[#1D1D1D] bg-opacity-90 rounded-xl shadow-xl p-4">
        {/* Image div */}
        <div className="max-w-[330px]">
          <img className="rounded-xl" src={productPhoto} alt={productName} />
        </div>
        {/* Image div */}

        {/* Infomation div */}
        <div className="mt-8 max-w-[330px]">
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
        <div className="flex justify-between">
          <NavLink>
            <button className="btn btn-sm btn-accent btn-outline">
              View Details
            </button>
          </NavLink>
          <NavLink to={`/updatequery/${_id}`}>
            <button className="btn btn-sm btn-secondary btn-outline">
              Update
            </button>
          </NavLink>
          <button onClick={handleDelete} className="btn btn-sm btn-error btn-outline">Delete</button>
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
