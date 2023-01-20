import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistic = (props) => <tr><td>{props.text}</td><td>{props.value} {props.unit}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  if(good + neutral + bad != 0){
    return (
      <table>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={good+neutral+bad}/>
        <Statistic text="average" value={(good-bad)/(good+bad+neutral)}/>
        <Statistic text="positive" value={good*100/(good+neutral+bad)} unit="%"/>
      </table>
    )
  }
  return (
    <div>No feedback given</div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (newValue) => () => setGood(newValue)

  const handleNeutral = (newValue) => () => setNeutral(newValue)

  const handleBad = (newValue) => () => setBad(newValue)


  return (
    <div>
      <h1>give feedbacks</h1>

      <Button handleClick={handleGood(good + 1)} text="good"/>
      <Button handleClick={handleNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={handleBad(bad + 1)} text="bad"/>

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))