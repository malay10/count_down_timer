import React, { Component } from 'react'
import PropsTypes from 'prop-types';
import Timer from './Timer';

export class DatePicker extends Component {
   
    constructor(props){
        super(props);
        this.state = {date: {}}
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("denied");
    //     return false;
    // }
    

    onChange = (e) => {
        //can be improved.
        const year = e.target.value.substring(0,4);
        const month = e.target.value.substring(5,7);
        const day = e.target.value.substring(8,10);
        this.setState({[e.target.name]: new Date(year, month -1, day)}, ()=> {this.props.targetDate(this.state)});
        Timer.hello()
    }


    render() {
        // console.log(this.props.targetDate);
        return (
            <div style={inputStyle}>
                <input type="date" name="date" onChange={this.onChange } />
                
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

DatePicker.propTypes = {
    targetDate: PropsTypes.any.isRequired
}

export default DatePicker
