import React from 'react'

function InlineStyling() {
    const obj={
        fontSize:'65px',
        backgroundColor:'grey',
        color:'white'
    }
    return (
        <div>
            <h1 style={obj}>Inline Styling</h1>
        </div>
    )
}

export default InlineStyling
