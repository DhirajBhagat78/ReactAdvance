//WAP to show Toggle state and generate following output using state, event binding and ternary operator
import React, { Component } from 'react'

export class QueEight extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isChecked:true
        }
        this.toggleChange=this.toggleChange.bind(this)
    }
    toggleChange()
    {
        alert("button clicked")
        this.setState(
            {
                isChecked:!this.state.isChecked
            }
        )
    }
    render() {
        return (
           
               this.state.isChecked ? <button onClick={this.toggleChange}>ON</button>:
               <button onClick={this.toggleChange}>OFF</button> 
           
        )
    }
}

export default QueEight
