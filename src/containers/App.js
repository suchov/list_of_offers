import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Filtering from '../components/Filtering';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

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

  onButtonClick = (event) => {
    switch (event.target.value) {
      case 'price':
        this.setState({ cars: this.state.cars.sort((a, b) => a.sortIndexes.price - b.sortIndexes.price) });
        break;
      case 'popularity':
        this.setState({ cars: this.state.cars.sort((a, b) => a.sortIndexes.popularity - b.sortIndexes.popularity) });
        break;
      default:
        this.setState({ cars: this.state.cars.sort((a, b) => a.sortIndexes.name - b.sortIndexes.name) });
    }
  }

  render() {
    const { cars, searchField } = this.state;
    const filteredCars = cars.filter(car => {
      return car.carGroupInfo.modelExample.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !cars.length ?
    <h1 className="f1 tc">Loading...</h1> :
    (
      <div className="tc">
        <h1 className="f1">SIXT list</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Filtering nandleClick={this.onButtonClick} />
        <Scroll>
          <ErrorBoundry>
            <CardList cars={filteredCars} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;