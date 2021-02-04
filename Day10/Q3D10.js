//3. WAP to show use of key attribute for following example
//Example const fruits = ["Apple", "Banana", "Orange", "Mango"]

import React from 'react'

function Q3D10() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"]
    const fruitlist=fruits.map(fruit=><h2 key={fruit}>{fruit}</h2>)
    return (
        <div>
            {fruitlist}
        </div>
    )
}

export default Q3D10
