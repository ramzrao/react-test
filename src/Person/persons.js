import React, { PureComponent } from 'react';
import Person from './Person';

class Persons extends PureComponent {
    componentWillMount(){
        console.log("Persons.js componet will mount");
    }
    componentDidMount(){
        console.log("Persons.js componet did mount");

    }
    componentWillReceiveProps()
    {
        console.log("Persons.js componet will receive props");

    }
    componentWillUpdate(){
        console.log("Persons.js componet will update");

    }
    componentDidUpdate(){
        console.log("Persons.js componet did update");

    }
    render() {
        return (
            <div>
                {this.props.persons.map((per, index) => {
                    return <Person
                        click={() => this.props.delete(index)}
                        change={(event) => this.props.change(event, per.id)}
                        name={per.name}
                        age={per.age}
                        key={per.id}
                    />
                })}

            </div>
        )
    }
}

export default Persons;