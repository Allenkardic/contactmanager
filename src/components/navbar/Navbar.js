import React, { Component } from "react";
import "../../css/Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { menuToggle: false };
  navMenuToggle = () => {
    this.setState({ menuToggle: !this.state.menuToggle });
  };
  render() {
    const { home, listContacts, about, brand } = this.props;
    return (
      <div>
        <div className="navbar-des">
          <div className="navbar-des-one">
            <h2 className="brand">
              <span style={{ color: "gold" }}>{brand} </span>
            </h2>
          </div>
          <div className="navbar-des-two">
            <ul className="navbar-des-ul">
              <li className="navbar-des-li">
                <div className="navbar-des-a">
                  {" "}
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {home}
                  </Link>
                </div>
              </li>
              <li className="navbar-des-li">
                <div className="navbar-des-a">
                  {" "}
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {listContacts}
                  </Link>
                </div>
              </li>
              <li className="navbar-des-li">
                <div className="navbar-des-a">
                  {" "}
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {about}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-mob">
          <div className="navbar-mob-one">
            <h2>
              <span style={{ color: "gold" }}>{brand} </span>
              <i
                onClick={this.navMenuToggle}
                className="fas fa-bars hamburger"
              />
            </h2>
          </div>
          <div className="navbar-mob-two">
            {this.state.menuToggle ? (
              <ul className="navbar-mob-ul">
                <li className="navbar-mob-li">
                  <div className="navbar-mob-a">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {home}
                    </Link>
                  </div>
                </li>
                <li className="navbar-mob-li">
                  <div className="navbar-mob-a">
                    <Link
                      to="/contact"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {listContacts}
                    </Link>
                  </div>
                </li>
                <li className="navbar-mob-li">
                  <div className="navbar-mob-a">
                    <Link
                      to="/about"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {about}
                    </Link>
                  </div>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  listTodos: PropTypes.string.isRequired,
  contacts: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};
