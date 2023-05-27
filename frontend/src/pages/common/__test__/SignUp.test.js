import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignUp from "../SignUp";


describe("test for sign up component", () => {
    
    //test case for buttons
    test("render the signup form with button", () => {
        render(<SignUp/>);
        const buttonList = screen.findAllByRole("button");       
    });
})