import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={props.handler}>Child</button>
        </div>
    )
}

export default ChildComp
