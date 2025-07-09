import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { CardCountry } from "@/components";

const mockCountry = {
  name: { common: "Colombia", official: "República de Colombia" },
  flags: { png: "/colombia.png", alt: "Flag of Colombia" },
  region: "Americas",
  subregion: "South America",
  capital: ["Bogotá"],
  population: 50000000,
  cca3: "COL",
  tld: [".co"],
  currencies: {
    COP: {
      name: "Colombian peso",
      symbol: "$",
    },
  },
  languages: {
    spa: "Spanish",
  },
  borders: ["ECU", "BRA", "VEN"],
};

describe("Test in <CardCountry /> component.", () => {
  it("Renders country data successful", () => {
    render(<CardCountry country={mockCountry} />);

    expect(screen.getByText("Colombia")).toBeInTheDocument();
    expect(screen.getByText(/50,000,000/)).toBeInTheDocument();

    const region = screen.getByText(/Region:/).parentElement;
    expect(region).toHaveTextContent("Region:");
    expect(region).toHaveTextContent("Americas");

    const capital = screen.getByText(/Capital:/).parentElement;
    expect(capital).toHaveTextContent("Capital:");
    expect(capital).toHaveTextContent("Bogotá");

    const image = screen.getByAltText("Flag of Colombia") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toContain("/_next/image");

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/COL");
  });
});
