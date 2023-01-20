import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.addNumber}>
        <div>
          name: <input 
            value={props.newName}
            onChange={props.handleName}
          />
        </div>
        <div>
          number: <input 
            value={props.newNumber}
            onChange={props.handleNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form