import React from "react";
import "./App.css";
import Header from "./components/Header";
import DatePicker from "./containers/DatePicker";
import Timer from "./containers/Timer";

export class App extends React.Component {
  state = { targetDate: {} };

  setTargetDate = (tDate) => {
    this.setState({ targetDate: tDate });
  };

  render() {
    return (
      <div className="App" style={appStyle}>
        <Header />
        <DatePicker
          targetDate={this.state.targetDate}
          updateDate={this.setTargetDate}
        />
        <Timer eventDate={this.state.targetDate} />
      </div>
    );
  }
}

const appStyle = {
  height: "100vh",
};

export default App;
