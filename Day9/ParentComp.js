import React, { Component } from 'react'
import ChildComp from './ChildComp'
class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentdata:'parent'
        }
        this.parentMethod=this.parentMethod.bind(this)
    }
    parentMethod()
    {
        alert("this msg from " +this.state.parentdata)
    }
    
    render() {
        return (
            <div>
                <ChildComp handler={this.parentMethod}/>
            </div>
        )
    }
}

export default ParentComp
