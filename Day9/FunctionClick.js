import React from 'react'

function FunctionClick() {
    function handleClick()
    {
        alert("button Clicked")
    }
    return (
        <div>
            <button onClick={handleClick}>function component</button>
        </div>
    )
}

export default FunctionClick
