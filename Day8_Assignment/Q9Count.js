import React,{Component} from 'react'

class Counter extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }

    render()
    {
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <button onClick={()=>this.setState({
                    count:this.state.count+2})}>Increment Counter</button>
            </div>
        )
    }
}
export default Counter