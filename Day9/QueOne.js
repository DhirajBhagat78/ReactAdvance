//1. WAP to use Destructure in functional parameter itself for studRoll=101, studName=”Raj” mark=85

import React from 'react'

function QueOne({studRoll,studName,mark}) {
    return (
        <div>
            Student Roll no is {studRoll} Name is {studName}
            and marks is {mark}
        </div>
    )
}

export default QueOne
