import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import { SearchForm } from './SearchForm';

configure({ adapter: new Adapter() });

describe('SearchForm', () => {
  test('should render without crashing', () => {
    shallow(<SearchForm />);
  });

  test('should render a form with and input field and submit button', () => {
    const component = shallow(<SearchForm />);

    expect(component.find('form').length).toBe(1);
    expect(component.find('Field').length).toBe(1);
    expect(component.find('Field').prop('name')).toBe('location');
    expect(component.find('Field').prop('component')).toBe('input');
    expect(component.find('Field').prop('type')).toBe('text');
    expect(component.find('Field').prop('placeholder')).toBe('Your city name');
    expect(component.find('button').length).toBe(1);
  });

  test('should call `handleSubmit` when button is clicked', () => {
    const handleSubmitMock = jest.fn();
    const component = shallow(<SearchForm handleSubmit={handleSubmitMock} />);

    expect(component.find('form').prop('onSubmit')).toBe(handleSubmitMock);

    component.find('form').simulate('submit');

    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
