//3. WAP to display EmpId=101, EmpName=”Raj” using functional component with properties
import React from 'react'
function Employee(props)
{
    return <div>Empid={props.id} EmpName={props.name}</div>
}
export default Employee