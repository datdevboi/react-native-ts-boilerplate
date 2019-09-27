import 'react-native';
import * as React from 'react';
import {render} from 'react-native-testing-library';
import {App} from '../App';

it('renders correctly', () => {
  const {toJSON} = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
