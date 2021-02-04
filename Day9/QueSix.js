import React, { Component } from 'react'

export class QueSix extends Component {
    constructor(props)
    {
        super(props)
        
            this.state={
                msg:"Hello how are you!!!!"
            }
       // this.handleClick=this.handleClick.bind(this)
    }
    handleClick=()=>
    {
        this.setState({
            msg:"I am fine"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                {/* <button onClick={this.handleClick.bind(this)}>clickMe</button> */}
                {/* <button onClick={()=>this.handleClick()}>clickMe</button> */}
                <button onClick={this.handleClick}>clickMe</button>
            </div>
        )
    }
}

export default QueSix
