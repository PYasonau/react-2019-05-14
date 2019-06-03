import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  SUBTRACT_FROM_CART,
  DELETE_FROM_CART
} from "../constants";

export const increase = () => ({
  type: INCREMENT
});
export const decrease = () => ({
  type: DECREMENT
});
export const increaseCart = id => ({
  type: ADD_TO_CART,
  payload: {
    id
  }
});
export const decreaseCart = id => ({
  type: SUBTRACT_FROM_CART,
  payload: {
    id
  }
});
export const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  payload: {
    id
  }
});

export const addReview = (
  restoranId,
  reviewId,
  reviewText,
  userId,
  userName,
  rating
) => (
  console.log(userId),
  {
    type: "ADD_REVIEW",
    payload: {
      restoranId: restoranId,
      reviewId: reviewId,
      reviewText: reviewText,
      userId: userId,
      rating: rating,
      userName: userName
    }
  }
);
