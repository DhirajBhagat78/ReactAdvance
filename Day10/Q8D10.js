//8. WAP togenerate following output using inline css without use js object

import React from 'react'

function Q8D10() {
    const obj={
        fontSize:'20px',
        backgroundColor:'lightblue',
        color:'white'
    }
    return (
        <div>
            <h3 style={
                {
                    fontSize:'40px',
                    backgroundColor:'lightblue',
                    color:'red'
                }}>Hello React Inline</h3>
                <h4>Welcome TQPP</h4>
                <h5 style={obj}>Hello Jay how are you?</h5>
        </div>
    )
}

export default Q8D10

