import React, { Component } from 'react'

export default class seasonDisplay extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props.lat);
    console.log(this.props.errorMessage);
    return (
      <div>
        <h1>Season Display W/ Altitude: {this.props.lat}</h1>
        <h2>Error Message: {this.props.errorMessage}</h2>
      </div>
    )
  }
}


