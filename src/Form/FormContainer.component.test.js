import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import { FormContainer } from "./FormContainer";

configure({ adapter: new Adapter() });

const MIN_PROPS = {
  items: {
    name: 'city',
    sys: {
      country: 'country'
    },
    main: {
      temp: 'temp'
    },
    weather: [{
      icon: 'icon',
      description: 'description'
    }]
  }
};

describe('FormContainer', () => {
  test('should render without crashing', () => {
    shallow(<FormContainer {...MIN_PROPS} />);
  });

  test('should render a <h1 /> with the correct city and country', () => {
    const component = shallow(<FormContainer {...MIN_PROPS} />);

    expect(component.find('h1').length).toBe(2);
    expect(component.find('h1').at(0).text()).toBe('Weather in city, country');
  });

  test('should render a <h1 /> with the temp', () => {
    const component = shallow(<FormContainer {...MIN_PROPS} />);

    expect(component.find('h1').length).toBe(2);
    expect(component.find('h1').at(1).text()).toBe('temp °C');
  });

  test('should render a <img /> with the correct src', () => {
    const component = shallow(<FormContainer {...MIN_PROPS} />);

    expect(component.find('img').length).toBe(1);
    expect(component.find('img').prop('src')).toBe('http://openweathermap.org/img/w/icon.png');
  });

  test('should render a <p /> with the correct description', () => {
    const component = shallow(<FormContainer {...MIN_PROPS} />);

    expect(component.find('p').length).toBe(1);
    expect(component.find('p').text()).toBe('description');
  });

  test('should render a <p /> with message when hasErrored is true', () => {
    const component = shallow(<FormContainer {...MIN_PROPS} hasErrored />);

    expect(component.find('p').length).toBe(1);
    expect(component.find('p').text()).toBe('Sorry! There was an error getting the weather for this location');
  });

  test('should render a <p /> with message when isLoading', () => {
    const component = shallow(<FormContainer {...MIN_PROPS} isLoading />);

    expect(component.find('p').length).toBe(1);
    expect(component.find('p').text()).toBe('Loading…');
  });
});