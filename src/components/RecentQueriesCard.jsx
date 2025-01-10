import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const RecentQueriesCard = ({ query }) => {
  const { queryTitle, productPhoto, productName, productBrand, _id } = query;
  return (
    <div className="mx-auto">
      {/* Card wrapping div */}
      <div className="bg-[#707070] p-4 rounded-2xl max-w-[380px] h-[700px] shadow-xl bg-opacity-50 flex flex-col justify-between">
        {/* Image div */}
        <div>
          <img
            className="w-full h-[300px] object-fill rounded-xl shadow-xl"
            src={productPhoto}
            alt={productName}
          />
        </div>
        {/* Image div */}

        {/* Information div */}
        <div className="bg-base-300 h-[250px] p-2 mt-4 rounded-2xl shadow-xl flex flex-col justify-between">
          <p className="text-lg mt-4">
            Query Title: <span className="font-bold text-lg">{queryTitle}</span>
          </p>
          <p className="text-lg mt-4">
            Product Name:{" "}
            <span className="font-bold text-lg">{productName}</span>
          </p>
          <p className="text-lg mt-4">
            Product Brand:{" "}
            <span className="font-bold text-lg">{productBrand}</span>
          </p>
        </div>
        {/* Information div */}

        <div className="mt-10">
                    <NavLink to={`/viewdetails/${_id}`}>
                        <button className="btn shadow-xl">Details Here!</button>
                    </NavLink>
                </div>
      </div>
      {/* Card wrapping div */}
    </div>
  );
};

RecentQueriesCard.propTypes = {
  query: PropTypes.object.isRequired,
};
export default RecentQueriesCard;
