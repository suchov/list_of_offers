import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Filtering from './components/Filtering';
import { cars } from './cars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: cars,
      searchField: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredCars = this.state.cars[0].offers.filter(car => {
      return car.carGroupInfo.modelExample.name.toLowerCase().includes(this.state.searchField.toLowerCase());
      
      
    })
    return (
      <div className="tc">
        <h1>SIXT list</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Filtering />
        <CardList cars={filteredCars} />
      </div>
    );
  }
}

export default App;