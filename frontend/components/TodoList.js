import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component{
  constructor(props) {
    super(props)
  }
  
  
  render(){
    const { change } = this.props
    return (
      <ul>
      {
        this.props.todos.map(todo => {
          return (<Todo handleClick={this.props.handleClick} todo={todo} />)
        })
      }
    </ul>
    )
  }
}
