import React from 'react'

function Employee({emp}) {
    return (<h2>i am {emp.name} i am {emp.designation} and my id is {emp.id}</h2>)
}

export default Employee
