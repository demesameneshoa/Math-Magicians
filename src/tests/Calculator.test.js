import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/Calculator';

describe('Calculator component unit test', () => {
  test('Calculator Component Renders Properly ', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('The Calculator Component Contains The Display Component ', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
