import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";
import "./review.css";
import store from "../../store/index";

function Review({ review }) {
  const findedReviewText = () => {
    return store.getState().reviews.find(r => r.id === review).text;
  };

  const findedReviewUser = () => {
    return store
      .getState()
      .users.find(
        u => u.id === store.getState().reviews.find(r => r.id === review).userId
      ).name;
  };

  const findedReviewRating = () => {
    return store.getState().reviews.find(r => r.id === review).rating;
  };

  return (
    <Comment
      className="review"
      author={findedReviewUser()}
      content={findedReviewText()}
      actions={[
        <Rate
          disabled
          allowHalf
          defaultValue={findedReviewRating()}
          className="review-rating"
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default Review;
