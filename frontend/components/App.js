import React from 'react'
import Todo from './Todo'
import TodoList from './TodoList'
import Form from './Form'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

componentDidMount(){
  axios.get(URL)
  .then(res => {
    this.setState({...this.state, todos: res.data.data})
  })
  .catch(err => console.error(err))
}



  handleClear = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {return todo.completed === false})
    })
  }

  handleClick = (id) => {
   this.setState({
    ...this.state,
    todos: this.state.todos.map(todo => {
      if(todo.id === id ){
        return {
          ...todo, completed: !todo.completed
        }
      }
      else {
        return todo
      }
    })
   })
  }

  addTodo = (givenTask) => {
    const newTodo = {
      task: givenTask,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos:[...this.state.todos, newTodo]
    })
  }


  render() {
    const {todos} = this.state
    return (
      <div>
        <h1>Todos</h1>
      <TodoList handleClick={this.handleClick} todos={todos} />
      <Form addTodo={this.addTodo}  clear={this.handleClear}  />

      </div>
    )
  }
}
