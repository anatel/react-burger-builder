import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    people: [
      { id: 'g12h', name: 'Anat', age: 29 },
      { id: 'g2f3', name: 'Roei', age: 31 },
      { id: '8sh', name: 'Robi', age: 2 }
    ],
    showPersons: false
  };

  deletePersonHandler(personIndex) {
    const persons = [...this.state.people];
    persons.splice(personIndex, 1);
    this.setState({
      people: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => p.id === id);

    const person = {...this.state.people[personIndex]};
    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({
      people
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.people.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.togglePersonsHandler}
                style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  };
}

export default App;