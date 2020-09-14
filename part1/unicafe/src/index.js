import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
  {text}
  </button>
  )
  
  const Statistic = ({text, value}) => (
    <tr>
    <td>{text}</td><td>{value}</td>
    </tr>
    )
    
    const Statistics = (props) => {
      const average = () => { 
        let toBeReturned = 0;
        let i;
        for (i = 0; i < props.good; i++){
          toBeReturned++;
        }
        for (i=0; i < props.bad; i++){
          toBeReturned--;
        }
        return toBeReturned/props.totalFeedbacks;
      }
      
      const positivePercentage = () => {
        return (props.good/props.totalFeedbacks)*100+' %'
      }
      
      if (props.totalFeedbacks===0){
        return(
          <React.Fragment>
          <h2>Statistics</h2>
          <p>No feedback given</p>
          </React.Fragment>
          )
        }
        
        return (
          <React.Fragment>
          <h2>Statistics</h2>
          <table>
          <tbody>
          <Statistic text={'good'} value={props.good} />
          <Statistic text={'neutral'} value={props.neutral} />
          <Statistic text={'bad'} value={props.bad} />
          <Statistic text={'all'} value={props.totalFeedbacks} />
          <Statistic text={'average'} value={average()} />
          <Statistic text={'positive'} value={positivePercentage()} />
          </tbody>
          </table>
          </React.Fragment>
          )
        }
        
        const App = () => {
          // save clicks of each button to own state
          const [good, setGood] = useState(0)
          const [neutral, setNeutral] = useState(0)
          const [bad, setBad] = useState(0)
          const [totalFeedbacks, setTotalFeedbacks] = useState(0)
          
          return (
            <div>
            <h1>give feedback</h1>
            <Button handleClick={() => {
              setGood(good +1)
              setTotalFeedbacks(totalFeedbacks + 1) }} 
              text={'good'} 
              />
              <Button handleClick={() => {
                setNeutral(neutral + 1)
                setTotalFeedbacks(totalFeedbacks +1) }}
                text={'neutral'} />
                <Button handleClick={() => {
                  setBad(bad +1)
                  setTotalFeedbacks(totalFeedbacks +1)}} text={'bad'} />
                  <Statistics good={good} neutral={neutral} bad={bad} totalFeedbacks={totalFeedbacks} />
                  </div>
                  )
                }
                
                ReactDOM.render(<App />, 
                  document.getElementById('root')
                  )
