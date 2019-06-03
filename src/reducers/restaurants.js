import { normalizedRestaurants } from "../fixtures";

/* export default (restaurantsState = normalizedRestaurants, action) => {
  return restaurantsState;
}; */

export default (restaurantsState = normalizedRestaurants, action) => {
  switch (action.type) {
    case "ADD_REVIEW": {
      const newRestaurantsState = [...restaurantsState];

      console.log(newRestaurantsState);

      let rr = newRestaurantsState.find(
        r => r.id === action.payload.restoranId
      );

      rr.reviews.push(action.payload.reviewId);
      return newRestaurantsState;
    }
    default:
      return restaurantsState;
  }
  return restaurantsState;
};
