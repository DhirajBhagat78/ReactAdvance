//4. WAP to show use of key attribute as index for following example
//Const cars = ["Hyundai", "Tata", "BMW”, "Ford”, “Tata”];

import React from 'react'

function Q4D10() {
    const cars = ["Hyundai", "Tata", "BMW","Ford","Tata"];
    const car=cars.map((c,index)=><h2 key={index}>{index}:{c}</h2>)
    return (
        <div>
            {car}
        </div>
    )
}

export default Q4D10
