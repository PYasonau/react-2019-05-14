import React, { Component } from "react";

import { Form, Input, Button } from "antd";
import "./../../components/user-form/user-form.css";

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
          <Button type="primary" htmlType="submit" onClick={this.submit}>
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

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };
}

/* const mapDispatchToProps = {
    addnewReview: addReview
  };


  export default connect(
    null,
    mapDispatchToProps
  )(AddReview); */
export default AddReview;
