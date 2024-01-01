import React, { Component } from 'react'
import { 
  Button, 
  TextInput, 
  Row 
} from 'react-materialize'

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
        <Row>
          <TextInput s={12} m={8} l={10} xl={4}
            label="Restaurant Name"
            value={inputText}
            onChange={this.handleTextChange}
            data-testid="newRestaurantName"
          />
          <Button s={12} m={8} l={10} xl={4}
            data-testid="saveNewRestaurantButton"
            onClick={this.handleSave}
          >Save</Button>
        </Row>
      </div>
    )
  }
}
