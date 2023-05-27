import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TransportationForm from "./TransportationForm";

describe("AddTransportation", () => {
  it("should render the form", () => {
    render(<TransportationForm />);

    // Assert that the form elements are rendered
    expect(screen.getByLabelText("Destination:")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Departure Date and Time:")
    ).toBeInTheDocument();
    // ... add assertions for other form elements ...
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should display an error message when submitting an empty form", () => {
    render(<TransportationForm />);

    fireEvent.click(screen.getByText("Submit"));

    // Assert that the error messages are displayed for the required fields
    expect(screen.getByText("Destination is required")).toBeInTheDocument();
    expect(
      screen.getByText("Departure Date and Time is required")
    ).toBeInTheDocument();
    // ... add assertions for other required fields ...
  });

  it("should successfully submit the form with valid input", () => {
    render(<AddTransportation />);

    // Fill in the form fields with valid input
    fireEvent.change(screen.getByLabelText("Destination:"), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByLabelText("Departure Date and Time:"), {
      target: { value: "2023-04-26T10:00" },
    });
    // ... fill in other form fields with valid input ...

    fireEvent.click(screen.getByText("Submit"));

    // Assert that the success message is displayed
    expect(screen.getByText("Data submitted successfully")).toBeInTheDocument();
  });
});
