import React, { Component } from 'react' 
let time=0;
class Timer extends Component {

    values = {

    }

    state = {
        days: 'D',
        hours: 'O',
        minutes: 'N',
        seconds: 'E',
        timerOn: false
    }

    hello = () => {
        console.log("hi");
    }

    timeLeft = (countDownTime) => {

        // if(Object.entries(this.props.targetDate).length > 0){
        //     this.values = this.timeLeft(this.props.targetDate);
        // }
        // else{
        //     console.log("DONE");
        // }
      
        let now = new Date().getTime();
        let time = countDownTime.date.getTime() - now;

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
            timerOn: true});

             console.log("");

        //return {daysLeft, hoursLeft, minutesLeft, secondsLeft};

    }

    timeCounter = setInterval(() => {
        if(this.state.timerOn)
            console.log(time++);
    }, 1000)

    // shouldComponentUpdate(nexProps, nextState){
    //     if(this.state === this.nextState){
    //         return false;
    //     }
    //     return false;
    // }


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
        )
    }
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

export default Timer
