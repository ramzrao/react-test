import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:"Ram",age:30},
      {name:"Raj",age:28},
      {name:"Rajesh",age:27}
    ]
  }
  personHandler = (newName) => {
    this.setState({persons:[
      {name:newName,age:30},
      {name:"Rajesh",age:28},
      {name:'',age:0}
    ]});
  }
  nameChangeHandler = (event) => {
    this.setState({persons:[
      {name:event.target.value,age:30},
      {name:"Rajesh",age:28},
      {name:'',age:0}
    ]});
  }
  render() {
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
        <button onClick={this.personHandler.bind(this,'Rama')}>Click Here</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={()=>this.personHandler('Ramar!!')}
          change={this.nameChangeHandler}>My Hobbies: Cricket</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );

    //return React.createElement('div',null,'Hello')
  }
}

export default App;
