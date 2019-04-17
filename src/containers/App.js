import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Filtering from '../components/Filtering';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://content.sixt.io/codingtasks/offers.json")
      .then(response => response.json())
      .then(cars => this.setState({ cars: cars.offers }));
    }
  

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredCars = this.state.cars.filter(car => {
      return car.carGroupInfo.modelExample.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if (this.state.cars.length === 0) {      
      return <h1 className="f1 tc">Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">SIXT list</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Filtering />
          <Scroll>
            <CardList cars={filteredCars} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;