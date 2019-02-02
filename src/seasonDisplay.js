import React, { Component } from "react";

export default class seasonDisplay extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  
  render() {
    console.log(this.props.lat);
    console.log(this.props.errorMessage);
    if (this.props.errorMessage && !this.props.lat) {
      return <div> Error : {this.props.errorMessage}</div>;
    }
    if (!this.props.errorMessage && this.props.lat) {
      return <div> Season Display W/ Latitude : {this.props.lat} </div>;
    }
    return (
      <div>
        <h3>Loading ...</h3>
      </div>
    );
  }
}
