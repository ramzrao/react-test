import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { id:1, name: "Ram", age: 30 },
      { id:2, name: "Raj", age: 28 },
      { id:3, name: "Rajesh", age: 27 }
    ],
    showPersons : false
  }
  personHandler = (newName) => {
    const showP = this.state.showPersons;
    this.setState({
      showPersons : !showP
    });
  }
  deletePersonHandler= (index) => {
    const personsList = [...this.state.persons];
    personsList.splice(index,1);
    this.setState({
      persons:personsList
    })
  };
  nameChangeHandler = (event,key) => {
    const personList = [...this.state.persons];
    const index  = personList.findIndex(item => item.id == key);
    personList[index] = event.target.value;
    this.setState({
      persons:personList
    });
  };
  render() {
    let persons = null;
    if(this.state.showPersons)
    {
      
      persons = <div>
         {this.state.persons.map((per,index) => {
           return <Person
           click = {() => this.deletePersonHandler(index)}
           change = {(event) => this.nameChangeHandler(event,per.id)}
           name={per.name}
           age={per.age}
           key={per.id}
         />
         })} 
           
    </div> 
    }
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello w
        </p> */}
        <p>Hello</p>
        <button onClick={this.personHandler}>Click Here</button>
       {persons}
      </div>
    );

    //return React.createElement('div',null,'Hello')
  }
}

export default App;
