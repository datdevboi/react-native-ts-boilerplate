/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render} from 'react-native-testing-library';

it('renders correctly', () => {
  const {toJSON} = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
