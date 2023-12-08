import React, { Component } from 'react'
import { Button, TextInput } from 'react-materialize'
global.M = require('materialize-css');

export default class NewRestaurantForm extends Component {
  state = { inputText: '' }

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value })
  }

  handleSave = () => {
    const { inputText } = this.state
    const { onSave } = this.props
    onSave(inputText)
  }

  render() {
    const { inputText } = this.state
    // return null; 
    return(
      <div>
        <TextInput 
          label="Restaurant Name"
          value={inputText}
          onChange={this.handleTextChange}
          data-testid="newRestaurantName"
        />
        <Button 
          data-testid="saveNewRestaurantButton"
          onClick={this.handleSave}
        >Add</Button>
      </div>
    )
  }
}
