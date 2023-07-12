import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';

describe('Button component unit test', () => {
  test('Button Component Renders Number Buttons Properly ', () => {
    const tree = renderer.create(<Button name="5" clickHandler={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Button Component Renders Operation Buttons Properly', () => {
    const tree = renderer.create(<Button name="+" operation clickHandler={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
