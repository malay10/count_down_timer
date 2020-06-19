import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <h1>Count Down</h1>
            </div>
        )
    }
}

const headerStyle = {
    background: '#666',
    textAlign: 'center',
    color: '#fff',
    padding: '0.5rem'
}

export default Header
