//9. WAP to show age is eligible for vote or not using if-else.
import React, { Component } from 'react'

export class QueNine extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             age:24
        }
    }
    
    render() {
        if(this.state.age>=18)
        {
        return (
            <div>
                You are eligibile for vote
            </div>
        )}
        else
        {
            return <div>You are not eligibile for vote</div>
        }
    }
}

export default QueNine
