import { render, screen } from "@testing-library/react";

import { Loader } from "@/components";

describe("Test in <Loader /> component.", () => {
  it("Displays the loading message", () => {
    render(<Loader />);
    expect(screen.getByText("Loading countries...")).toBeInTheDocument();
  });
});
