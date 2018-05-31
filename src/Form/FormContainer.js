import React from 'react'
import ContactForm from './contact/ContactForm'
import { connect } from 'react-redux';
import { itemsFetchData } from "./weather/operations";


class FormContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=22a053e2de5c3c1d4a609a446bebe537');
  }

  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <ul>
          {this.props.items && this.props.items.weather ?
            this.props.items.weather.map((item) => <li key={item.id}>{item.main}</li>) :
            <li>Nothing</li>
          }
        </ul>
        <ContactForm onSubmit={this.submit} />
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