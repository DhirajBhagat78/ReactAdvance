import React, { Component } from 'react'

class ClassEvent extends Component {

    handleClick()
    {
        alert("button clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default ClassEvent
