import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Content from "./Content"

const Course = (props) => {
    return (
      <div>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts}/>
      </div>
    )
  }

export default Course