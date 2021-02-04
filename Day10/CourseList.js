import React from 'react'

function CourseList() {
    const  courses=["Java","Angular","React"]

       const CourseList= courses.map((course)=>{
            return <h2>{course}</h2>
        })
    
    return (
        <div>
            {/* <h1>{courses[0]}</h1>
            <h1>{courses[1]}</h1>
            <h1>{courses[2]}</h1> */}
{/* 
            {
                courses.map((course)=>{
                    return <h2>{course}</h2>
                })
            } */}

            {CourseList}
        </div>
    )
}

export default CourseList
