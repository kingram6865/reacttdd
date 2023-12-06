import React from 'react'
import RestaurantListPage from './RestaurantListPage'

export default class App extends React.Component {

  render() {
    return <div>
      <div className="row">
        <div className="col s12 m10 l8 xl4 offset-m1 offset-l2 offset-xl-4">
          <RestaurantListPage />
        </div>
      </div>
    </div>
  }
}
