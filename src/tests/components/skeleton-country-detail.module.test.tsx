import { render, screen } from "@testing-library/react";
import { SkeletonCountryDetail } from "@/components";

describe("SkeletonCountryDetail", () => {
  it("Should render all placeholder sections", () => {
    render(<SkeletonCountryDetail />);

    expect(screen.getByTestId("skeleton-main")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-back-button")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-back-text")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-container")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-image")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-info")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-title")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-text-details")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-section")).toBeInTheDocument();
  });
});
