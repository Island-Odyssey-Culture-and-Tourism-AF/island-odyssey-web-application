import {render, screen, clenaup, getByTestId} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import SignIn from "../SignIn";



test('test', () => {
    expect(true).toBe(true);
})

// test('login testing', () => {
//     render(<LoginPage/>);
//     var childElement = getByTestId("login-1");
//     expect(childElement).toBeInTheDocument();
    
    
// });

//test case for email validation
test("should passed on email validation", () => {
    const testEmail = "supun@gmail.com";
});


//negative test case for email type
test("email input field should accept email", () => {
    render(<SignIn />);
    const email = screen.getByPlaceholderText("Enter Your Email");
    userEvent.type(email, "supun");
    expect(email.value).toMatch("supun@gmail.com");
});

//match email input type with its attribute
test("email input type should have type email", () => {
    render(<SignIn />);
    const email = screen.getByPlaceholderText("Enter Your Email");
    expect(email).toHaveAttribute("type","email");
});