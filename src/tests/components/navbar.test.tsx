import { render, screen, fireEvent } from "@testing-library/react";

import { Navbar } from "@/components";

import { useDarkMode } from "@/hooks/useDarkMode";

jest.mock("@/hooks/useDarkMode", () => ({
  useDarkMode: jest.fn(),
}));

describe("Test in <Navbar /> component.", () => {
  it("Displays the title and button", () => {
    (useDarkMode as jest.Mock).mockReturnValue({
      isDark: false,
      toggleTheme: jest.fn(),
    });

    render(<Navbar />);
    expect(screen.getByText("Where in the world?")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Dark Mode");
  });

  it("Calls toggleTheme when the button is clicked", () => {
    const toggleThemeMock = jest.fn();
    (useDarkMode as jest.Mock).mockReturnValue({
      isDark: false,
      toggleTheme: toggleThemeMock,
    });

    render(<Navbar />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});
