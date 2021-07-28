import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// suite
describe("Greeting compoent", () => {
  // test er globally available
  test("renders hello world tekst", () => {
    // Arrange
    render(<Greeting />);

    // Act
    //

    // Assert
    const helloWorldElement = screen.getByText("hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders text if button not clicked", () => {
    // Arrange
    render(<Greeting />);
    // Asserting
    const text = screen.getByText(/nooooo/i);
    expect(text).toBeInTheDocument();
  });

  test("rendrer 'klikket!' etter button click", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const text = screen.getByText("klikket!", { exact: false });
    expect(text).toBeInTheDocument();
  });

  // teste false positives
  test("rendrer ikke 'klikket!' før button click", () => {
    // arrange
    render(<Greeting />);

    // assert
    const text = screen.queryByText("klikket!", { exact: false });
    expect(text).toBeNull();
  });
});
