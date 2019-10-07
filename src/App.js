import React, { Component } from "react";
import { getRequest } from "./fetchCalls";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      snacks: [],
      err: ""
    };
  }

  fetchData = async () => {
    getRequest()
      .then(data => this.setState({ snacks: data }))
      .catch(error => this.setState({ err: error }));
  };

  displaySnacks = () => {
    const snacks = this.state.snacks.map(snack => {
      console.log(snack.name)
      return (
          <p>{snack.name}</p>
      );
    });
    return snacks
  };

  render() {
    console.log(this.state.snacks);
    return (
      <div className="App">
        <h1>Snacks</h1>
        <button onClick={this.fetchData}>Get some snacks</button>
        <button onClick={this.displaySnacks}>Display them</button>
      </div>
    );
  }
}

export default App;
