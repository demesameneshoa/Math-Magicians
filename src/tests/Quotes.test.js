import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quotes';

describe('Quote component unit test', () => {
  test('Quote Component Renders Properly ', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
