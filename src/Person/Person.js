import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.change} value={props.name}/>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;