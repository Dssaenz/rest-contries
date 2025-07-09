import "@testing-library/jest-dom";
import { EmptyState } from "@/components";
import { render, screen } from "@testing-library/react";

describe("Test in <EmptyState /> component.", () => {
  it("Displays the message that no countries were found", () => {
    render(<EmptyState />);
    expect(
      screen.getByText("No countries related to your search were found.")
    ).toBeInTheDocument();
  });
});
