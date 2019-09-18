import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";
import "../../css/AddContact.css";

class EditContact extends Component {
  state = { name: "", email: "", phone: "" };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`http://jsonplaceholder.typicode.com/users${id}`)
      .then((response) =>
        this.setState({
          name: response.data,
          email: response.email,
          phone: response.data
        })
      );
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

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
                <h1 className="add-contact">Edit Contacts</h1>
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
                  Update contact
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
