import { normalizedReviews } from "../fixtures";

export default (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case "ADD_REVIEW": {
      const newReviewsState = {
        ...reviewsState
      };
      newReviewsState.push(action.payload);
      return newReviewsState;
    }
    default:
      return reviewsState;
  }
  return reviewsState;
};
