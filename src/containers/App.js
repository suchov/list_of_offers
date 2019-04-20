import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Filtering from "../components/Filtering";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestCars, setButtonClick } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchCars.searchField,
    buttonClicked: state.sortCars.buttonClicked,
    cars: state.requestCars.cars,
    isPending: state.requestCars.isPending,
    error: state.requestCars.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onButtonClick: event => dispatch(setButtonClick(event.target.value)),
    onRequestCars: () => dispatch(requestCars())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestCars();
  }

  render() {
    const {
      searchField,
      onSearchChange,
      buttonClicked,
      onButtonClick,
      cars,
      isPending
    } = this.props;
    const filteredCars = cars
      .sort(
        (a, b) => a.sortIndexes[buttonClicked] - b.sortIndexes[buttonClicked]
      )
      .filter(car => {
        return car.carGroupInfo.modelExample.name
          .toLowerCase()
          .includes(searchField.toLowerCase().trim());
      });
    if (isPending) {
      return <h1 className="f1 tc">Loading...</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1">SIXT list</h1>
        <SearchBox searchChange={onSearchChange} />
        <Filtering handleClick={onButtonClick} />
        <Scroll>
          <ErrorBoundary>
            <CardList cars={filteredCars} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
