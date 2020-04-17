import React from 'react';
import logo from './logo.svg';
import './App.css';

let id = 0;

const Todo = (props) => {
  return(
    <li className="todo__item" key={props.todo.id}>
      <input className="todo__checkbox" type="checkbox" checked={props.todo.checked} onChange={props.onToggle}/>
      <span className="todo__text"> {props.todo.text} </span>
      <button className="todo__delete" onClick={props.onDelete}>Delete</button>
  </li>
  )
}

class  App extends React.Component {
  constructor(){
    super();
    this.state =({
      todos: []
    })
  }

  addTodo() {
   const text =  prompt('Enter todo please !!');
   if(text!=='' && text ) {
    this.setState({
      todos: [...this.state.todos,{text: text,id: id++, checked: false}],
    })
   }
   
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id !== id) return todo
        return (
          {
            id: todo.id,
            text: todo.text,
            checked: !todo.checked
          }
        )
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">
            TODO APP
          </h1>
          <div className="status-bar">
          <button className="btn-primary m-r-50" onClick={()=> this.addTodo()}>Add Todo</button>
            <span className="total-items m-r-50">
             Total list items: {this.state.todos.length}
            </span>
            <span className="total-unchecked-items m-r-50">
             Total unchecked items: {this.state.todos.filter(todo => !todo.checked).length}
            </span>
            
          </div>
        </header>
        <div className="list-container">
            <ul className="todo-item-list">
              {this.state.todos.map(todo => <Todo todo={todo} onDelete={()=> this.removeTodo(todo.id)}  onToggle={()=> this.toggleTodo(todo.id)} />)}
            </ul>
        </div>
      </div>
    );
  }
  
}

export default App;
