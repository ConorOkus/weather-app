import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './searchForm.css';

let SearchForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit} className="searchform cf">
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
}

SearchForm = reduxForm({
  form: 'search'
})(SearchForm);

export default SearchForm
