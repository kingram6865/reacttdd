import React, { Component } from 'react'
import { Button } from 'react-materialize'

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
    return(
      <div>
        <div className="input-field col s6">
        <input
          id="restaurant_name" 
          placeholder="Placeholder"
          value={inputText}
          onChange={this.handleTextChange}
          data-testid="newRestaurantName"
        />
        <label htmlFor="restaurant_name">Restaurant Name</label>
        </div>
        <Button 
          data-testid="saveNewRestaurantButton"
          onClick={this.handleSave}
        >Save</Button>
      </div>
    )
  }
}
