import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };

    case "ADD_CONTACT":
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? (item = action.payload) : item
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    items: [],
    dispatch: (action) => this.setState((state) => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ items: response.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
