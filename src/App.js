import React from 'react';
import './App.css';
import Header from './components/Header';
import DatePicker from './containers/DatePicker';
import Timer from './containers/Timer';



export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DatePicker />
        <Timer />
      </div>
    );
  }
}

export default App;
