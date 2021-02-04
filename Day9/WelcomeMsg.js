import React, { Component } from 'react'

class WelcomeMsg extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>welcome Dhiraj</div>
        //return this.state.isLoggedIn ? <div>welcome Dhiraj</div>:<div>welcome geust</div>
    
        // if(this.state.isLoggedIn)
        // {
        // return (
        //     <div>
        //         <h1>Welcome Dhiraj</h1>
        //     </div>
        // )}
        // else
        // {
        //    return <h1>welcome geust</h1>
        // }

    //     let result;
    //     if(this.state.isLoggedIn)
    //     {
    //         result=<div>welcome Dhiraj</div>
    //     }
    //     else
    //     {
    //         result=<div>welcome geust</div>
    //     }
    //     return <div>{result}</div>
     }
}

export default WelcomeMsg
