import PropTypes from "prop-types";

const RecommendCard = ({ recommend }) => {
    const { recommendPhoto, recommendTitle, recommendName, recommendReason, currentTimeStamp, recommederName } = recommend;

    return (
        <div className="bg-base-100 rounded-2xl p-4 shadow-xl">
            {/* Card Wrapping div */}
            <div className="flex items-center gap-8">
                {/* Image div */}
                <div>
                    <img className="w-[300px] h-[130px] rounded-2xl" src={recommendPhoto} alt={recommendName} />
                </div>
                {/* Image div */}

                {/* Information div */}
                <div className="bg-base-300 p-2 rounded-2xl bg-opacity-50 shadow-xl">
                    <p className="text-lg">Recommend created on: <span className="font-bold text-lg">{currentTimeStamp}</span></p>
                    <p className="text-lg mt-2">Recommended By: <span className="font-bold text-lg">{recommederName}</span></p>
                    <p className="text-lg mt-2">Recommend Title: <span className="font-bold text-lg">{recommendTitle}</span></p>
                    <p className="text-lg mt-2">Recommend Product Name: <span className="font-bold text-lg">{recommendName}</span></p>
                    <p className="text-lg mt-2">Recommend Reason: <span className="font-bold text-lg">{recommendReason}</span></p>
                </div>
                {/* Information div */}
            </div>
            {/* Card Wrapping div */}
        </div>
    );
};

RecommendCard.propTypes = {
    recommend: PropTypes.object.isRequired,
}
export default RecommendCard;