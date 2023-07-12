import React from "react";
import renderer from "react-test-renderer";
import { screen, render } from "@testing-library/react";
import Display from '../components/Display';

describe ('Display component unit test', () => {
    it ("Display Component Renders Properly ", () =>{
        const tree = renderer.create(<Display/>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
    it ("The Display Components Displays Result", () =>{
        render(<Display result={'15.7'}/>);
        expect(screen.getByText('15.7')).toBeInTheDocument;
    });    
});
