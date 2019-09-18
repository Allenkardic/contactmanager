import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { items } = value;
          return (
            <React.Fragment>
              {items.map((content) => (
                <Contact key={content.id} content={content} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
