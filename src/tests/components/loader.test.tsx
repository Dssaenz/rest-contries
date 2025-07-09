import "@testing-library/jest-dom";
import { Loader } from "@/components";
import { render, screen } from "@testing-library/react";

describe("Test in <Loader /> component.", () => {
  it("Displays the loading message", () => {
    render(<Loader />);
    expect(screen.getByText("Loading countries...")).toBeInTheDocument();
  });
});
