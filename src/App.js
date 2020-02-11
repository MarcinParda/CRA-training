import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        this.setState({ users }); // using "users" is same as using "users: users"
      }
    };
    xhr.send(null);
  }

  render() {
    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h4>Name: {user.name}</h4>
        <p>City: {user.address.city}</p>
      </div>
    ));
    return <div>{users}</div>;
  }
}

export default App;
