import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const ReviewsCard = ({ customerReview }) => {
  const { customerImage, customerName, productName, review, rating } =
    customerReview;
  return (
    <div className="card card-side bg-base-100 shadow-xl w-[1000px] h-[300px] mx-10 mt-5">
      <figure className="w-[1000px]">
        <img
          className="object-cover h-[300px]"
          src={customerImage}
          alt={customerName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{customerName}</h2>
        <p>{productName}</p>
        <ReactStars
          count={5}
          size={24}
          isHalf={false}
          edit={false}
          value={rating}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <p>{review}</p>
      </div>
    </div>
  );
};

ReviewsCard.propTypes = {
  customerReview: PropTypes.object.isRequired,
};
export default ReviewsCard;
