import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async compoent", () => {
  test("renders posts", async () => {
    // lag en dummy funksjon som redefinerer window.fetch og result
    // jest er globally available
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    }); // set a value to result av fetch
    
    render(<Async />);

    const linkElement = await screen.findAllByRole("listitem"); // i = case insensitive
    expect(linkElement).not.toHaveLength(0);
  });
});
