import React from 'react';
import './App.css';
import Header from './components/Header';
import DatePicker from './containers/DatePicker';
// import Timer from './containers/Timer';



export class App extends React.Component {

  state={targetDate: {}}

  setTargetDate = (tDate) =>{
    console.log(tDate);
    this.setState({targetDate: tDate});
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        <DatePicker targetDate={this.state.targetDate} updateDate={this.setTargetDate} />
        {/* <Timer /> */}
      </div>
    );
  }
}

export default App;
