import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Filtering from "../components/Filtering";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  state = {
    cars: []
  };

  componentDidMount() {
    fetch("https://content.sixt.io/codingtasks/offers.json")
      .then(response => response.json())
      .then(cars => this.setState({ cars: cars.offers }));
  }

  onButtonClick = ({ target }) => {
    const { cars } = this.state;
    this.setState({
      cars: cars.sort(
        (a, b) => a.sortIndexes[target.value] - b.sortIndexes[target.value]
      )
    });
  };

  render() {
    const { cars } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredCars = cars.filter(car => {
      return car.carGroupInfo.modelExample.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    if (!cars.length) {
      return <h1 className="f1 tc">Loading...</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1">SIXT list</h1>
        <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
