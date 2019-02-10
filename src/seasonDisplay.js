import '../src/seasonDisplay.css'
import React, { Component } from "react";
import LoadingSpinner from './loadingSpinner';



export default class seasonDisplay extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const getSeason = (lat, month) => {
      if (month > 2 && month < 9) {
        return lat > 0 ? "SUMMER" : "WINTER";
      }
      return month > 0 ? "WINTER" : "SUMMER";
    };


    const season = getSeason(this.props.lat, new Date().getMonth());
    const seasonConfig = {
      WINTER: {
        text: `IT'S COLD OUTSIDE! GRAB A COAT`,
        iconName : 'snowflake'
      },

      SUMMER: {
        text: `IT'S SUMMER BABY, HIT THE BEACH`,
        iconName: 'sun'
      }
    }

    const {text , iconName } = seasonConfig[season];

    if (this.props.errorMessage && !this.props.lat) {
      return <div> Error : {this.props.errorMessage}</div>;
    }
    if (!this.props.errorMessage && this.props.lat) {
      return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1> 
        <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    }
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
}
