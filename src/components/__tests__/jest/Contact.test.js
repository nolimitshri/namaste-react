/* eslint-disable no-undef */
import Contact from "../../Contact"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom";

describe("Contact Us Component's Testing....", () => {

    it("Should load Contact Us Component", () => {
    
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
    
    it("Should load Button inside Contact Us Component", () => {
        
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    
    });

});