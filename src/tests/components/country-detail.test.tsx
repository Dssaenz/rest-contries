import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { CountryDetail } from "@/components";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { priority, ...rest } = props;
    return <img {...rest} />;
  },
}));

const mockCountry = {
  name: {
    common: "Colombia",
    official: "República de Colombia",
    nativeName: {
      ara: {
        official: "",
        common: "",
      },
    },
  },
  flags: {
    svg: "",
    png: "/colombia.png",
    alt: "Flag of Colombia",
  },
  region: "Americas",
  subregion: "South America",
  capital: ["Bogotá"],
  population: 50000000,
  cca3: "COL",
  tld: [".co"],
  currencies: {
    AED: {
      name: "Colombian peso",
      symbol: "$",
    },
    COP: {
      name: "Colombian peso",
      symbol: "$",
    },
  },
  languages: {
    spa: "Spanish",
    ara: "",
  },
  borders: ["ECU", "BRA", "VEN"],
};

describe("Test in <CountryDetail /> component.", () => {
  it("Renders all country data successful", () => {
    render(<CountryDetail country={mockCountry} />);

    expect(
      screen.getByRole("heading", { name: "Colombia" })
    ).toBeInTheDocument();

    const nativeNameElement = screen.getByText(/Native Name:/).parentElement!;
    expect(nativeNameElement).toHaveTextContent("República de Colombia");

    expect(screen.getByText("Colombia")).toBeInTheDocument();

    const regionElement = screen.getByText("Region:", { selector: "strong" })
      .parentElement!;
    expect(regionElement).toHaveTextContent("Americas");

    const subregionElement = screen.getByText("Sub Region:", {
      selector: "strong",
    }).parentElement!;
    expect(subregionElement).toHaveTextContent("South America");

    const capital = screen.getByText(/Capital:/).parentElement;
    expect(capital).toHaveTextContent("Capital:");
    expect(capital).toHaveTextContent("Bogotá");

    const tld = screen.getByText("Top Level Domain:", { selector: "strong" })
      .parentElement!;
    expect(tld).toHaveTextContent(".co");

    const currencies = screen.getByText("Currencies:", { selector: "strong" })
      .parentElement!;
    expect(currencies).toHaveTextContent("Colombian peso ($)");

    const languages = screen.getByText("Languages:", { selector: "strong" })
      .parentElement!;
    expect(languages).toHaveTextContent("Spanish");

    expect(screen.getByText("ECU")).toBeInTheDocument();
    expect(screen.getByText("BRA")).toBeInTheDocument();
    expect(screen.getByText("VEN")).toBeInTheDocument();

    const image = screen.getByAltText("Flag of Colombia") as HTMLImageElement;
    expect(image.src).toContain("/colombia.png");

    const backButton = screen.getByRole("button", { name: /Back/i });
    expect(backButton).toBeInTheDocument();
  });

  it("Render message if there are no bordering countries", () => {
    const mockWithoutBorders = { ...mockCountry, borders: [] };
    render(<CountryDetail country={mockWithoutBorders} />);
    expect(screen.getByText("No border countries")).toBeInTheDocument();
  });
});
