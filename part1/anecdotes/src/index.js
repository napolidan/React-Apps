import React, {useState} from 'react'
import ReactDOM from "react-dom"

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const HighVotes = (props) => {
  let most = 0
  let index = 0
  for (let i = 0; i < props.points.length; i++){
    if(props.points[i] > most){
      most = props.points[i]
      index = i
    }
  }

  if (most != 0){
    return (
      <p>{props.anecdotes[index]}</p>
    )
  }
  return (
    <p>No votations given</p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(6).fill(0))
  const copy = [...points]

  const voteAnecdote = (selected) => () => {
    copy[selected] +=1
    setPoints(copy)
  }

  const handleRandom = () => () => setSelected(Math.round(Math.random()*(props.anecdotes.length-1)))
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={voteAnecdote(selected)} text="vote"/>
      <Button handleClick={handleRandom()} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <HighVotes anecdotes={anecdotes} points={points}/>
    </div>
  )
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))
