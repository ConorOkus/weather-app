import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './searchForm.css';

export const SearchForm = props => {
  const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit} className="searchform cf">
        <div>
          <Field
            name="location"
            component="input"
            type="text"
            placeholder="Your city name"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    )
}

export default reduxForm({form: 'search'})(SearchForm);
