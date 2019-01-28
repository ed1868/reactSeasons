import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SeasonDisplay from "./seasonDisplay";

class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return (
      <div className="App">
        <SeasonDisplay />
      </div>
    );
  }
}

export default App;
