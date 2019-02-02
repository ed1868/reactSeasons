import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SeasonDisplay from "./seasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      lat: null,
      errorMessage: '',
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);

        return this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err.message);
        this.setState({errorMessage: err.message});
      }
    );
  }
  render() {
    return (
      <div className="App">
        <SeasonDisplay lat={this.state.lat} errorMessage={this.state.errorMessage} />
      </div>
    );
  }
}

export default App;
