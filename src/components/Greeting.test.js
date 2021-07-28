import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

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
