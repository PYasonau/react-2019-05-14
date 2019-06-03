import React, { PureComponent } from "react";
import { Rate } from "antd";
import PropTypes from "prop-types";
import store from "../../store/index";

class AverageRating extends PureComponent {
  state = {
    value: 0
  };

  render() {
    const filteredReviews = store
      .getState()
      .reviews.filter(r => this.props.reviews.includes(r.id));
    const rawRating =
      filteredReviews.reduce((acc, { rating }) => {
        return acc + rating;
      }, 0) / filteredReviews.length;
    const normalizedRating = Math.floor(rawRating * 2) / 2;

    return <Rate defaultValue={normalizedRating} disabled allowHalf />;
  }
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default AverageRating;
