import React, { Component } from 'react'
import PropsTypes from 'prop-types';
// import Timer from './Timer';

export class DatePicker extends Component {
   
    constructor(props){
        super(props);
        this.state = {date: {},
        days: 'D',
        hours: 'O',
        minutes: 'N',
        seconds: 'E',
        timerOn: false}
    }

    onChange = (e) => {
        //Converting HTML date to js date. 
        //NOTE: time is set to 00:00:00 hrs. 
        console.log(e.target.value)
        const year = e.target.value.substring(0,4);
        const month = e.target.value.substring(5,7);
        const day = e.target.value.substring(8,10);
        let target = new Date(year, month -1, day);

        //past date is neglected.
        if(target < new Date()){
            console.log("aaaaaaaaaa");
            this.setState({
                timerOn: false,
                days: 'D',
                hours: 'O',
                minutes: 'N',
                seconds: 'E'
            });
        }
        //Future date
        else{
            this.setState({date: target});    
            this.updateTimer(target);
        }

    }

    updateTimer = (endDate) => {
               

        let now = new Date().getTime();
        let time = endDate.getTime() - now;

        //Calculating time left.
        let days = Math.floor(time/ (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
        let minutes = Math.floor((time %(1000 * 60 * 60))/ (1000 * 60));
        let seconds = Math.floor((time %(1000 * 60))/1000);
        console.log(days + ":" + hours + ":" + minutes + ":" +seconds);

         this.setState({            
            days,
            hours,
            minutes,
            seconds,
            timerOn: true
        });
    }

    //updating time every 1ms. 
    timeCounter = setInterval(() => {
       
        if(this.state.timerOn){
            this.updateTimer(this.state.date);         
        }
    }, 1000)


    render() {
        // console.log(this.props.targetDate);
        return (
            <div>
            <div style={inputStyle}>
                <input type="date" name="date" onChange={this.onChange } />
            </div>
                <div style={timerOuter}>

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
            </div>
        )
    }
}

const inputStyle = {
    border: '2px solid black',
    margin : '1rem auto', 
    padding: '1rem',
    display: 'inline-block'

}

const timerOuter = {
    display: 'flex',
    background: '#660099',
    color: '#fff',
    alignItem: 'center',
    justifyContent: 'center'
}

const timerInner = {
    padding: '1rem',
    margin: '0 2rem'
    
}

const colon = {
    padding: '1.9rem 0',
    fontSize: '2rem'

}

const timerValue = {
    fontWeight: '1000',
    fontSize: '1.3rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #fff'
}

DatePicker.propTypes = {
    targetDate: PropsTypes.any.isRequired
}

export default DatePicker
