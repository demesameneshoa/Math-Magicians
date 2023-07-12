import React from "react";
import renderer from "react-test-renderer";
import { screen, render } from "@testing-library/react";
import Home from '../components/Home';

describe ('Home component unit test', () => {
    it ("Home Component Renders Properly ", () =>{
        const tree = renderer.create(<Home/>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
    it ("The Home Components Contains Title", () =>{
        render(<Home/>);
        expect(screen.getByText('Welcome to our page')).toBeInTheDocument;
    });    
});
