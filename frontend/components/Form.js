import React from 'react'

export default class Form extends React.Component{
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

  handleChange =(event) =>{
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state.input)
    this.setState({input: ''})
  }

  render(){
    const {clear} = this.props
    return (
      <form>
      <input onChange={this.handleChange} value={this.state.input} type='text' />
      <button onClick={this.handleSubmit}>Add</button>
      <button onClick={clear}>Clear</button>
      </form>
    )
  }
}