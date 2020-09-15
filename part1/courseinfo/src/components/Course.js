import React from "react"

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(c => (
        <Part key={c.id} partContent={c} />
      ))}
    </div>
  )
}

const Part = ({ partContent }) => {
  return (
    <p>
      {partContent.name} {partContent.exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      <b>
        Number of exercises{" "}
        {parts.map(v => v.exercises).reduce((s, v) => s + v)}
      </b>
    </p>
  )
}

export default Course
