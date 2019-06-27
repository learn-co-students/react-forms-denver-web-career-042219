import React from 'react'

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  }

  firstNameHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  lastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <input name="firstName" type="text" onChange={event => this.firstNameHandler(event)} value={this.state.firstName}></input>
        <input name="lastName" type="text" onChange={event => this.lastNameHandler(event)} value={this.state.lastName}></input>
      </div>
    )
  }
}