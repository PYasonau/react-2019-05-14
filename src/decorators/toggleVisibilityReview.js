// HOC - higher order component
import React, { Component } from "react";

const toggleVisibilityReview = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isReviewAddOpen: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleVisibilityReview={this.toggleVisibilityReview}
        />
      );
    }

    toggleVisibilityReview = () => {
      this.setState({
        isReviewAddOpen: !this.state.isReviewAddOpen
      });
    };
  };

export { toggleVisibilityReview };
