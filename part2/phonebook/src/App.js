import React, {useState} from 'react'
import Filter from './Components/Filter'
import Form from './Components/Form'
import Persons from './Components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterSearch, setFilterSearch] = useState('')
  
  const personsToShow = filterSearch.length>0?
  persons.filter(person => person.name.toLowerCase().includes(filterSearch.toLowerCase()))
  :persons

  console.log(personsToShow)

  const handleName = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumber = (event) =>{
    setNewNumber(event.target.value)
  }
  

  const addNumber = (event) => {
    event.preventDefault()
    const existingName = false
    const existingNumber = false
    const numberObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }
    persons.map(person=>{
      if(person.name === newName){
        alert(`${newName} is already added to phonebook`)
        existingName = true
      }
      if(person.number === newNumber){
        alert(`${newNumber} is already added to phonebook`)
        existingNumber = true
      }
    })
    if (!existingName && !existingNumber){
      setPersons(persons.concat(numberObject))
    }
  }

  const handleFilter = (event) => {
    setFilterSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterSearch={filterSearch} handleFilter={handleFilter}/>
      <Form addNumber={addNumber} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App
