import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { SkeletonCard } from "@/components";

describe("Test in <SkeletonCard /> component.", () => {
  it("Renders country data successful", () => {
    render(<SkeletonCard />);

    const flag = screen.getByTestId("skeleton-flag");
    const title = screen.getByTestId("skeleton-title");
    const lines = screen.getAllByTestId("skeleton-line");

    expect(flag).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(lines.length).toBe(3);
  });
});
