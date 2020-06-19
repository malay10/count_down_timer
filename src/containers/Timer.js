import React, { Component } from 'react' 

export class Timer extends Component {

    state = {
        days: 'D',
        hours: 'O',
        minutes: 'N',
        seconds: 'E'
    }

    render() {
        return (
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


                
                {/* <div style={componentStyle} style="days">{this.state.days}</div>
                <div style={componentStyle1}> : </div>
                <div style={componentStyle} className="hours">{this.state.hours}</div>
                <div style={componentStyle1}> : </div>
                <div style={componentStyle} className="minutes">{this.state.minutes}</div>
                <div style={componentStyle1}> : </div>
                <div style={componentStyle} className="seconds">{this.state.seconds}</div> */}
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
