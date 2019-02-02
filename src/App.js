import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SeasonDisplay from "./seasonDisplay";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     lat: null,
  //     errorMessage: ""
  //   };
  // }

  state = {lat : null, errorMessage: ''};

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  };
  render() {
    return (
      <div className="App">
        <SeasonDisplay
          lat={this.state.lat}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}

export default App;
