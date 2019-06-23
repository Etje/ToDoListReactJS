import React from 'react';
import ToDos from './components/Todos';
import { directive } from '@babel/types';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'This boring state',
        completed: false
      },
      {
        id: 2,
        title: 'diner with some people',
        completed: false
      },
      {
        id: 3,
        title: 'Follow this Course on Youtube to improve your skills',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  render(){
     return(
       <div className="App">
         <ToDos todos={this.state.todos} markComplete={this.markComplete}/>
       </div>
     )
  }
}

export default App;
