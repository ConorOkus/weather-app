import React from 'react'
import SearchForm from './search/SearchForm'
import { connect } from 'react-redux';
import { itemsFetchData } from "./weather/operations";

import './formContainer.css';

class FormContainer extends React.Component {
  submit = values => {
    const { location } = values;
    this.props.fetchData(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=22a053e2de5c3c1d4a609a446bebe537`);
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error getting the weather for this location</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div className="wrapper">
        <h1>{this.props.items.name && this.props.items.sys ? `Weather in ${this.props.items.name}, ${this.props.items.sys.country}` : null}</h1>
        <h1>{this.props.items.main ? `${this.props.items.main.temp} °C` : null}</h1>
        <div>
          {this.props.items.weather ? <img src={`http://openweathermap.org/img/w/${this.props.items.weather[0].icon}.png`} alt='weather icon'/> : null}
        </div>
        <p>{this.props.items.weather ? this.props.items.weather[0].description : null}</p>
        <SearchForm onSubmit={this.submit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);