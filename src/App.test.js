import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Component OrderOption', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
