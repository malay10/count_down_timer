import React, { Component } from "react";
import PropsTypes from "prop-types";
// import Timer from './Timer';

export class DatePicker extends Component {
  onChange = (e) => {
    //Converting HTML date to js date.
    //NOTE: time is set to 00:00:00 hrs.
    //2020-05-08: format
    const year = e.target.value.substring(0, 4);
    const month = e.target.value.substring(5, 7);
    const day = e.target.value.substring(8, 10);
    let target = new Date(year, month - 1, day);

    //updating date in parent i.e. App.js
    this.props.updateDate(target);
  };

  //Date Input
  render() {
    return (
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <div style={inputStyle}>
          <input type="date" name="date" onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

//Styles
const inputStyle = {
  border: "2px solid black",
  margin: "auto",
  padding: "1rem",
  display: "inline",
};

DatePicker.propTypes = {
  targetDate: PropsTypes.any.isRequired,
};

export default DatePicker;
