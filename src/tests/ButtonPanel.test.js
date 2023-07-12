import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../components/ButtonPanel';

describe('Calculator component unit test', () => {
  test('Calculator Component Renders Properly ', () => {
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
