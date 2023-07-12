import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/Calculator';

describe('Calculator component unit test', () => {
  test('Calculator Component Renders Properly ', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
