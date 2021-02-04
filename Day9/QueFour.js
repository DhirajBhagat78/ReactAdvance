//4. WAP to show use of event handle on button and show alert is “Welcome to TQPP” in functional component
import React from 'react'

function QueFour() {
    function handleClick()
    {
        alert("button cliked")
    }
    return (
        <div>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    )
}

export default QueFour
