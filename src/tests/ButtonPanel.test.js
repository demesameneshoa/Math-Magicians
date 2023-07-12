import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';

describe('Buttonpanel component unit test', () => {
  test('Button Panel Component Renders Properly ', () => {
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('The Buttons In the Component are 19 ', () => {
    render(<ButtonPanel />);
    expect(screen.getAllByRole('button').length).toBe(19);
  });
});
