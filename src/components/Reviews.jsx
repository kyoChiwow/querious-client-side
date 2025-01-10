import { useEffect, useState } from "react";
import ReviewsCard from "./ReviewsCard";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      {/* Header div here */}
      <header>
        <h1 className="text-4xl text-center font-bold">Customer Reviews</h1>
      </header>
      {/* Header div here */}

      {/* Review card div here */}
      <main className="max-w-[95%] xl:max-w-[80%] mx-auto">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {reviews.map((review, idx) => (
            <ReviewsCard key={idx} customerReview={review}></ReviewsCard>
          ))}
        </Marquee>
      </main>
      {/* Review card div here */}
    </div>
  );
};

export default Reviews;
