import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MyQueryCard = ({ query }) => {
  const { _id, productName, productBrand, productPhoto, queryTitle } = query;
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
          <NavLink>
            <button className="btn btn-sm btn-error btn-outline">Delete</button>
          </NavLink>
        </div>
        {/* Buttons Div */}
      </div>
      {/* Card Wrapping div */}
    </div>
  );
};

MyQueryCard.propTypes = {
  query: PropTypes.object.isRequired,
};
export default MyQueryCard;
