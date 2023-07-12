import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quotes';

describe('Home component unit test', () => {
  test('Home Component Renders Properly ', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
