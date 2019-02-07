import React, { Component } from "react";

export default class seasonDisplay extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }


  render() {


  const getSeason = (lat, month) => {


      if(month > 2 && month < 9) {
        return lat > 0 ? 'SUMMER BABY' : 'WINTER IS COMING!';
      }
      return month > 0 ? 'WINTER IS COMING' : 'SUMMER BABY';
    }
    const season = getSeason(this.props.lat, new Date().getMonth());
    console.log(season);
    console.log(this.props.lat);
    console.log(this.props.errorMessage);
    const text = season === 'WINTER IS COMING' ? 'SUMMER BABY' : 
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
