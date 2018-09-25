import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.change} value={props.name}/>
            <p>{props.children}</p>
        </div>
    )
}


export default Person;