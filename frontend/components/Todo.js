import React from 'react'

export default class Todo extends React.Component{
  constructor(props) {
    super(props)
  }
  

  handleToggle = ( ) => {
    this.props.handleClick(this.props.todo.id)
  }

  render (){

    return (
    <li 
    onClick={this.handleToggle} 
    key={this.props.todo.id}>
      {this.props.todo.task} {this.props.todo.completed ? <span>-completed</span> : <span></span>} </li>)
  }
}

