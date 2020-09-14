import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let randomNumber; 

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  
  return (
    <div>
    <h1>Anecdotes of the day</h1> 
    {props.anecdotes[selected]}
    <p>
    <Button handleClick={() => {
      randomNumber = Math.floor(Math.random() * anecdotes.length)
      setSelected(randomNumber)}} 
      text='new anecdotes' />
      <Button handleClick={() => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
      }} text='vote' />
      </p>
      <h2>Anecdotes with most votes</h2>
      {props.anecdotes[(points.indexOf(Math.max(...points)))]}
      
      </div>
      )
    }
    
    const Button =({handleClick, text}) => (
      <button onClick={handleClick}>{text}</button>
      )
      
      
      ReactDOM.render(
        <App anecdotes={anecdotes} />,
        document.getElementById('root')
        )