import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>
  {props.course}
  </h1>
  )
  
  const Content = (props) => (
    <div>
    <Part partContent={props.parts[0]} />
    <Part partContent={props.parts[1]} />
    <Part partContent={props.parts[2]} />
    </div>
    )
    
    const Part = (props) =>{ 
      
      return (<p>
        {props.partContent.name} {props.partContent.exercises}
        </p>)
      }
      
      const Total = (props) =>{ 
        let totalNumberOfExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
        
        return (
        <p>
        Number of exercises {totalNumberOfExercises}
        </p>
        )
      }
        const App = () => {
          const course = {
            name: 'Half Stack application development',
            parts: [
              {
                name: 'Fundamentals of React',
                exercises: 10
              },
              {
                name: 'Using props to pass data',
                exercises: 7
              },
              {
                name: 'State of a component',
                exercises: 14
              }
            ]
          }
          
          return (
            <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
            </div>
            )
          }
          
          ReactDOM.render(<App />, document.getElementById('root'))