import React, { Component } from "react";
import PropTypes from "prop-types";

class Timer extends Component {
  state = {
    days: "D",
    hours: "O",
    minutes: "N",
    seconds: "E",
    timerOn: false,
  };

  componentDidMount() {
    console.log("Done mounting");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.eventDate !== this.props.eventDate) {
      this.updateTime();
    } else {
      //this.updateTime();
    }
  }

  timeCounter = setInterval(() => {
    if (this.state.timerOn) this.updateTime();
  }, 1000);

  updateTime = () => {
    const endDate = this.props.eventDate;

    let now = new Date().getTime();
    let time = endDate.getTime() - now;

    //Calculating time left.
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    // console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

    //past date is neglected.
    if (endDate < new Date()) {
      this.setState({
        timerOn: false,
        days: "D",
        hours: "O",
        minutes: "N",
        seconds: "E",
      });
    }
    //Future Date
    else {
      this.setState({
        days,
        hours,
        minutes,
        seconds,
        timerOn: true,
      });
    }
  };

  render() {
    // console.log("timer " + this.props.targetDate);

    return (
      <div style={timerOuter} onLoad={this.timeLeft}>
        <div style={timerInner}>
          <p style={timerValue}>{this.state.days}</p>
          <p>Days</p>
        </div>
        <div style={colon}>: </div>
        <div style={timerInner}>
          <p style={timerValue}>{this.state.hours}</p>
          <p>Hours</p>
        </div>
        <div style={colon}>: </div>
        <div style={timerInner}>
          <p style={timerValue}>{this.state.minutes}</p>
          <p>Minutes</p>
        </div>
        <div style={colon}>: </div>
        <div style={timerInner}>
          <p style={timerValue}>{this.state.seconds}</p>
          <p>seconds</p>
        </div>
      </div>
    );
  }
}

//Styles
const timerOuter = {
  display: "flex",
  background: "#228B22",
  color: "#fff",
  alignItem: "center",
  justifyContent: "center",
};

const timerInner = {
  padding: "1rem",
  margin: "0 2rem",
};

const colon = {
  padding: "1.9rem 0",
  fontSize: "2rem",
};

const timerValue = {
  fontWeight: "1000",
  fontSize: "1.3rem",
  paddingBottom: "0.5rem",
  borderBottom: "2px solid #fff",
};

Timer.propType = {
  eventDate: PropTypes.object.isRequired,
};

export default Timer;
