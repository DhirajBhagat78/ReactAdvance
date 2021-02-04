import React from 'react'
//import Employee from '../Employee'

function EmployeeList() {
    // const employee=[
    //     {name:"Dhiraj",id:1,designation:"developer"},
    //     {name:"Amit",id:2,designation:"tester"},
    //     {name:"Vijay",id:3,designation:"manager"}
  //  ]

  const employee=["Dhiraj","Amit","Jay","Dhiraj"]
  const employeeList=employee.map((emp,index)=><h2 key={index}>{index}{emp}</h2>)

   // const employeeList=employee.map(emp=>{<Employee emp={emp}/>
         //return <h2>i am {emp.name} i am {emp.designation} and my id is {emp.id}</h2>
    
    return (
        <div>
            {employeeList}
        </div>
    )

}
export default EmployeeList
