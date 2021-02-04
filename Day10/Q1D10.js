//1. WAP to display list of fruits on browser using list rendering example
//Const fruits = ["Apple", "Banana", "Orange", "Mango"]

import React from 'react'

function Q1D10() {
    const fruits=["Apple", "Banana", "Orange", "Mango"];

    return (
        <div>
          {
              fruits.map((fruit)=>{
                  return <h2>{fruit}</h2>
              })
          }  
        </div>
    )
}

export default Q1D10
