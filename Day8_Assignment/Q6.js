//WAP to generate following output using propertiesin classcomponent example name=Jay heroname=Batman etc
import React,{Component} from 'react'
class Q6 extends Component
{
    render()
    {
        return<div><h1>Hello {this.props.name} also known as {this.props.heroname}</h1>
            {/* <h1>Hello {this.props.name1} also known as {this.props.heroname1}</h1>
            <h1>Hello {this.props.name2} also known as {this.props.heroname2}</h1> */}
        </div>
    }
}
export default Q6;