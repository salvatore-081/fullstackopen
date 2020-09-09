import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>
  {props.course}
  </h1>
  )
  
  const Content = (props) => (
    <div>
    <Part partName={props.partName1} numberOfExercises={props.numberOfExercises1} />
    <Part partName={props.partName2} numberOfExercises={props.numberOfExercises2} />
    <Part partName={props.partName3} numberOfExercises={props.numberOfExercises3} />
    </div>
    )
    
    const Part = (props) => (
      <p>
      {props.partName} {props.numberOfExercises}
      </p>
      )
      
      const Total = (props) => (
        <p>
        Number of exercises {props.totalNumberOfExercises}
        </p>
        )
        const App = () => {
          const course = 'Half Stack application development'
          const part1 = 'Fundamentals of React'
          const exercises1 = 10
          const part2 = 'Using props to pass data'
          const exercises2 = 7
          const part3 = 'State of a component'
          const exercises3 = 14
          
          return (
            <div>
            <Header course={course} />
            <Content partName1={part1} partName2={part2} partName3={part3}
              numberOfExercises1={exercises1} numberOfExercises2={exercises2} numberOfExercises3={exercises3} 
            />
            <Total totalNumberOfExercises={exercises1 + exercises2 + exercises3} />
            </div>
            )
          }
          
          ReactDOM.render(<App />, document.getElementById('root'))