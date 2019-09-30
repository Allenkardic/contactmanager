import React, { Component } from "react";
import "../../css/AddContact.css";
import { Consumer } from "../../Context";
import axios from "axios";

alert(
  "This app is currently working perfectly on my local machine but unfortunately, the app is not currently working properly when deployed on gitpages. Working on it currently!!!"
);
class AddContact extends Component {
  state = { name: "", email: "", phone: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      name,
      email,
      phone
    };

    axios
      .post("http://jsonplaceholder.typicode.com/users/", newContact)
      .then((response) =>
        dispatch({ type: "ADD_CONTACT", payload: response.data })
      );

    // clear state
    this.setState({ name: "", email: "", phone: "" });
    this.props.history.push("/contact");
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container-form">
              <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                <h1 className="add-contact">Add Contacts</h1>
                <label htmlFor="">Name:</label>
                <input
                  className="input-inner"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Enter name"
                  required
                />
                <br />
                <label htmlFor="">Email:</label>
                <input
                  className="input-inner"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Enter email"
                  required
                />
                <br />
                <label htmlFor="">Phone no:</label>
                <input
                  className="input-inner"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  placeholder="Enter phone"
                  required
                />
                <br />
                <button className="btn" type="submit">
                  Add contact
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
