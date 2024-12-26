import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const AllQueriesCard = ({ query }) => {
    const { _id, productPhoto, queryTitle, userName, productName, productBrand, recommendationCount } = query;
    return (
        <div className="mx-auto">
            {/* Card Wrapping div */}
            <div className="bg-[#707070] p-4 rounded-2xl max-w-[380px] h-[750px] shadow-xl bg-opacity-50 flex flex-col justify-between">
                {/* Image div */}
                <div>
                    <img className="w-full h-[300px] object-fill rounded-xl shadow-xl" src={productPhoto} alt={productName} />
                </div>
                {/* Image div */}

                {/* Information div */}
                <div className="bg-base-300 p-2 mt-4 rounded-2xl shadow-xl">
                    <p className="text-lg mt-4">Query Title: <span className="font-bold text-lg">{queryTitle}</span></p>
                    <p className="text-lg mt-4">Query Created By: <span className="font-bold text-lg">{userName}</span></p>
                    <p className="text-lg mt-4">Product Name: <span className="font-bold text-lg">{productName}</span></p>
                    <p className="text-lg mt-4">Product Brand: <span className="font-bold text-lg">{productBrand}</span></p>
                    <p className="text-lg mt-4">Recommendation Count: <span className="font-bold text-lg">{recommendationCount}</span></p>
                </div>
                {/* Information div */}

                {/* Recommend Button */}
                <div className="mt-10">
                    <NavLink to={`/viewdetails/${_id}`}>
                        <button className="btn shadow-xl">Recommend Here!</button>
                    </NavLink>
                </div>
                {/* Recommend Button */}
            </div>
            {/* Card Wrapping div */}
        </div>
    );
};

AllQueriesCard.propTypes = {
    query: PropTypes.object.isRequired,
}
export default AllQueriesCard;