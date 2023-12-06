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
        <div className="input-field row">
        <input
            className="col s12 m8 l10"
            id="restaurant_name" 
            placeholder="Restaurant Name"
            value={inputText}
            onChange={this.handleTextChange}
            data-testid="newRestaurantName"
          />
          
          
          <Button
            className="col s2 m2 l2"
            data-testid="saveNewRestaurantButton"
            onClick={this.handleSave}
          >Save</Button>
        </div>
      </div>
    )
  }
}
