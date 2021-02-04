//7. WAP to show Current Time and generate following output using state, event binding
//After

import React, { Component } from 'react'

export class QueSeven extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date:new Date().toLocaleString()
        }
        this.currentdate=this.currentdate.bind(this)
    }
    currentdate()
    {
        alert("button clicked");
        this.setState({date:new Date().toLocalString()})
    }
    render() {
        return (
            <div>
                <h1>{this.state.date}</h1>
                <button onClick={this.currentdate}>Current Date Time</button>
            </div>
        )
    }
}

export default QueSeven
