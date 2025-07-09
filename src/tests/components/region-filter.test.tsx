import "@testing-library/jest-dom";

import RegionFilter from "@/components/region-filter";

import { render, screen, fireEvent } from "@testing-library/react";

describe("Test in <RegionFilter /> component.", () => {
  it("Renders all region options", () => {
    render(<RegionFilter selected="" onChange={() => {}} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    const expectedRegions = [
      "All",
      "Africa",
      "Americas",
      "Asia",
      "Europe",
      "Oceania",
    ];

    expectedRegions.forEach((region, index) => {
      expect(options[index]).toHaveTextContent(region);
    });
  });

  it("Call onChange with the correct value when an option is selected", () => {
    const handleChange = jest.fn();
    render(<RegionFilter selected="" onChange={handleChange} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Asia" } });

    expect(handleChange).toHaveBeenCalledWith("Asia");
  });
});
