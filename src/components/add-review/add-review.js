import React, { Component } from "react";
import { addReview } from "../../ac";
import { Form, Input, Button } from "antd";
import "./../../components/user-form/user-form.css";
import { connect } from "react-redux";

class AddReview extends Component {
  state = {
    name: "",
    text: "",
    rating: ""
  };

  render() {
    const { name, text, rating } = this.state;
    const { restoranId } = this.props;

    console.log(restoranId);
    return (
      <Form className="user-form">
        <Form.Item
          label="Name"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item
          label="Review text"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={text} onChange={this.handlePhoneChange} />
        </Form.Item>
        <Form.Item
          label="Rating"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input.TextArea value={rating} onChange={this.handleAddressChange} />
        </Form.Item>
        <Form.Item className="user-form-submit-section">
          <Button type="primary" htmlType="submit" onClick={this.add}>
            Send order
          </Button>
        </Form.Item>
      </Form>
    );
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handlePhoneChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddressChange = e => {
    this.setState({
      rating: e.target.value
    });
  };

  add = () => {
    console.log("clicked");
    let reviewId = Math.random()
      .toString(36)
      .substring(7);
    let userId = Math.random()
      .toString(36)
      .substring(7);

    let text = this.state.text;
    let rating = this.state.rating;
    console.log(text);
    console.log(rating);

    this.props.addReview(
      this.props.restoranId,
      reviewId,
      this.state.text,
      userId,
      this.state.name,
      this.state.rating
    );
  };

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };
}

const mapDispatchToProps = {
  addReview
};

export default connect(
  null,
  mapDispatchToProps
)(AddReview);

/* export default AddReview; */
