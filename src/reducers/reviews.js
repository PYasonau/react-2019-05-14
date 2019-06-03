import { normalizedReviews } from "../fixtures";
import { normalizedRestaurants } from "../fixtures";

export default (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case "ADD_REVIEW": {
      const newReviewsState = [...reviewsState];
      console.log(action.payload);

      newReviewsState.push({
        id: action.payload.reviewId,
        userId: action.payload.userId,
        text: action.payload.reviewText,
        rating: action.payload.rating
      });
      console.log(newReviewsState);

      return newReviewsState;
    }
    default:
      return reviewsState;
  }
  return reviewsState;
};
