//3. WAP to use Destructuring props in Class components for companyName=” Thinkquotient”, Address=”Pune”

import React, { Component } from 'react'

 export class QueThree extends Component {
    render() {
        return (
            <div>
            <h1>  company name is {this.props.name} and address is {this.props.address} </h1>   
            </div>
        )
    }
}

export default QueThree
