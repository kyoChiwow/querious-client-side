import PropTypes from "prop-types";

const RecentQueriesCard = ({ query }) => {
  const { queryTitle, productPhoto, productName, productBrand } = query;
  return (
    <div>
      {/* Card wrapping div */}
      <div className="bg-[#707070] p-4 rounded-2xl max-w-[380px] h-[600px] shadow-xl bg-opacity-50 flex flex-col justify-between">
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
        <div className="bg-base-300 p-2 mt-4 rounded-2xl shadow-xl">
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
      </div>
      {/* Card wrapping div */}
    </div>
  );
};

RecentQueriesCard.propTypes = {
  query: PropTypes.object.isRequired,
};
export default RecentQueriesCard;
