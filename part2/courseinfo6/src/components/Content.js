import React from "react";
import { ReactDOM } from "react-dom";
import Part from "./Part";

const Content = (props) => {

    let totalSum = props.parts.reduce((sum, order) => {
        return sum+order.exercises
    }, 0)

    return (
        <div>
            {props.parts.map(x => 
                <Part key={x.id} part={x}/>
            )}
            <b>Total of exercises {totalSum}</b>
        </div>
    )
}


export default Content