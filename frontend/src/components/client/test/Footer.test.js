import {render, screen} from "@testing-library/react";
import Footer from "../Dashboard/Footer";


//test case for email in footer
test("footer renders with email", () => {
    render(<Footer/>);
    const linkElement = screen.getByText(/Subscribe to our newsletter/i);
    expect(linkElement).toBeInTheDocument();
});

//test case for number in footer
// test("footer renders with number", () => {
//     render(<Footer/>);
//     const linkElement = screen.getByText(/t+94 112 896 523/i);
//     expect(linkElement).toBeInTheDocument();
// });

// //test case for address in footer
// test("footer renders with address", () => {
//     render(<Footer/>);
//     const linkElement = screen.getByText(/54 main street/i);
//     expect(linkElement).toBeInTheDocument();
// });