import { renderHook, act } from "@testing-library/react";

import { useDarkMode } from "@/hooks/useDarkMode";

import { THEME } from "@/types/enums";

export let prefersDark = false;

export const mockMatchMedia = () => {
  window.matchMedia = jest.fn().mockImplementation((query: string) => ({
    matches: prefersDark,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
};

describe("Test in useDarkMode custom hook.", () => {
  beforeEach(() => {
    mockMatchMedia();
    localStorage.clear();
    document.documentElement.classList.remove(THEME.DARK);
  });

  it("usa modo oscuro si el tema guardado es 'dark'", () => {
    localStorage.setItem("theme", THEME.DARK);
    const { result } = renderHook(() => useDarkMode());

    expect(result.current.isDark).toBe(true);
    expect(document.documentElement.classList.contains(THEME.DARK)).toBe(true);
  });

  it("usa modo claro si el tema guardado es 'light'", () => {
    localStorage.setItem("theme", THEME.LIGHT);
    const { result } = renderHook(() => useDarkMode());

    expect(result.current.isDark).toBe(false);
    expect(document.documentElement.classList.contains(THEME.DARK)).toBe(false);
  });

  it("usa modo oscuro si no hay tema y el sistema prefiere oscuro", () => {
    prefersDark = true;
    const { result } = renderHook(() => useDarkMode());

    expect(result.current.isDark).toBe(true);
    expect(document.documentElement.classList.contains(THEME.DARK)).toBe(true);
  });

  it("usa modo claro si no hay tema y el sistema NO prefiere oscuro", () => {
    prefersDark = false;
    const { result } = renderHook(() => useDarkMode());

    expect(result.current.isDark).toBe(false);
    expect(document.documentElement.classList.contains(THEME.DARK)).toBe(false);
  });

  it("toggleTheme cambia de dark a light y viceversa", () => {
    localStorage.setItem("theme", THEME.DARK);
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorage.getItem("theme")).toBe(THEME.LIGHT);
    expect(document.documentElement.classList.contains(THEME.DARK)).toBe(false);

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorage.getItem("theme")).toBe(THEME.DARK);
    expect(document.documentElement.classList.contains(THEME.DARK)).toBe(true);
  });
});
