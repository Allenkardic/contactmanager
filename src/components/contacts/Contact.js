import React, { Component } from "react";
import "../../css/Contact.css";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context";

class Contact extends Component {
  state = { contactToggle: true };
  onClickToggle = () => {
    this.setState({ contactToggle: !this.state.contactToggle });
  };

  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };
  render() {
    const { id, name, email, phone } = this.props.content;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container">
              <h1 className="contact-h1">
                name: {name}{" "}
                <i onClick={this.onClickToggle} class="fas fa-caret-down" />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  class="fas fa-trash-alt"
                  style={{ float: "right", color: "red" }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    style={{
                      float: "right",
                      marginRight: "0.5rem",
                      color: "blue"
                    }}
                    class="fas fa-user-edit"
                  />
                </Link>
              </h1>
              {this.state.contactToggle ? (
                <ul className="container-inner">
                  <li className="container-inner-li">{email}</li>
                  <li className="container-inner-li">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
Contact.propTypes = {
  content: PropTypes.object.isRequired
};
