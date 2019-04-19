import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Filtering from "../components/Filtering";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestCars } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchCars.searchField,
    cars: state.requestCars.cars,
    isPending: state.requestCars.isPending,
    error: state.requestCars.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestCars: () => dispatch(requestCars())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestCars();
  }

  onButtonClick = ({ target }) => {
    const { cars } = this.props;
    this.setState({
      cars: cars.sort(
        (a, b) => a.sortIndexes[target.value] - b.sortIndexes[target.value]
      )
    });
  };

  render() {
    const { searchField, onSearchChange, cars, isPending } = this.props;
    const filteredCars = cars.filter(car => {
      return car.carGroupInfo.modelExample.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    if (isPending) {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
