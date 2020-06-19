import React, { Component } from 'react'
import PropsTypes from 'prop-types';

export class DatePicker extends Component {
   
    constructor(props){
        super(props);
        this.state = {date: Date()}
    }

    

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({date: e.target.value})
    }

    render() {
        return (
            <div style={inputStyle}>
                <input type="date" onChange={this.onChange} />
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
    
}

export default DatePicker
