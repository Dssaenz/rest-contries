import "@testing-library/jest-dom";

import Search from "@/components/search";

import { render, screen, fireEvent } from "@testing-library/react";

describe("Test in <Search /> component.", () => {
  it("Renders the input with the value and placeholder", () => {
    render(<Search value="Colombia" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Search for a country...");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Colombia");
  });

  it("Calls onChange when writing", () => {
    const handleChange = jest.fn();
    render(<Search value="" onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(input, { target: { value: "Brazil" } });

    expect(handleChange).toHaveBeenCalledWith("Brazil");
  });
});
