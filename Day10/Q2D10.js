//2. WAP to take an array of numbers and double their values and display on browser example
//Const numbers = [1, 2, 3, 4, 5] and output is 2, 4, 6, 8, 10

import React from 'react'

function Q2D10() {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>
            {
                numbers.map((number)=>{
                    return <h2>{number*2}</h2>
                })
            }
        </div>
    )
}

export default Q2D10
