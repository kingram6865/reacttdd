import React from 'react'
import { Collection, CollectionItem } from 'react-materialize'

const RestaurantList = ({ restaurantNames }) => (
  <ul className="collection with-header">
    <li className="collection-header"><h4>Restaurants</h4></li>
    {
      restaurantNames.length === 0
      && <li className="collection-item" key="no-restaurant">(None Added Yet)</li> 

    }
    
    {
      restaurantNames.map(restaurantName => (
        <li className="collection-item" key={restaurantName}>{restaurantName}</li>
      ))
    }
  </ul>
);

export default RestaurantList
