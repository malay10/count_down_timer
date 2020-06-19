import React from 'react';
import './App.css';
import Header from './components/Header';
import DatePicker from './containers/DatePicker';
import Timer from './containers/Timer';



export class App extends React.Component {

  state={targetDate: {}}

  getTargetDate = (tDate) =>{
    console.log(tDate);
    this.setState({targetDate: tDate});
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        <DatePicker targetDate={this.getTargetDate} />
        <Timer />
      </div>
    );
  }
}

export default App;
