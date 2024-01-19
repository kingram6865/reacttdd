import React, { Component } from 'react'
import { 
  Button, 
  Row,
  Modal 
} from 'react-materialize'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'

global.M = require('materialize-css');

export default class RestaurantListPage extends Component {
  state =  { 
    restaurantNames: []
  }

  handleShowNewRestaurantForm = () => {
    this.setState({ showNewRestaurantForm: true });
  }

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(state => ({
      restaurantNames: [ newRestaurantName, ...state.restaurantNames ]
    }));
    // const element = document.querySelectorAll('.modal')
    // const instance = M.Modal.getInstance(element)
    // instance.modal("close")
    $("#addRestaurantModal").modal("close")
  }

  renderNewRestaurantForm () {
    if (this.state.showNewRestaurantForm) {
      return (<NewRestaurantForm 
        onSave={this.handleAddRestaurant}
       />
      );
    }
  }
  
  render() {
    const { restaurantNames } = this.state
    return (
      <div>
        <Modal
          id="addRestaurantModal"
          header="New Restaurant"
          trigger={ <Button data-testid="addRestaurantButton">Add Restaurant</Button> }
        >
          <NewRestaurantForm onSave={this.handleAddRestaurant} />
        </Modal>

        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    )
  }
}