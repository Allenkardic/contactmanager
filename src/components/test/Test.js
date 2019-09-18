import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    userId: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ title: data.title, userId: data.userId })
      );
  }

  render() {
    const { title, userId } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h1>{userId}</h1>
      </div>
    );
  }
}

export default Test;
