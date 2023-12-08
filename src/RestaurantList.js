import React from 'react'
global.M = require('materialize-css');
import { Collection, CollectionItem } from 'react-materialize'


const RestaurantList = ({ restaurantNames }) => (
  <Collection>
    {
      restaurantNames.map(restaurantName => (
        <CollectionItem key={restaurantName}>
          {restaurantName}
        </CollectionItem>
      ))
    }
  </Collection>
);

export default RestaurantList
