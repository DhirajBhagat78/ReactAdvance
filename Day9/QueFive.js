//5. WAP to show use of event handle on button and show alert is “Hello react ” in class component
import React, { Component } from 'react'

export class QueFive extends Component {
    handleClick()
    {
        alert("Hello react...")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default QueFive
