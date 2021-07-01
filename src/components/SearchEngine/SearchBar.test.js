import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  test("renders SearchBar correctly", () => {
    render(<SearchBar />);

    const SearchBarElement = screen.getByPlaceholderText("Search by Name...");
    expect(SearchBarElement).toBeInTheDocument();
  });

  test("updates on change", () => {
    render(<SearchBar />);

    const SearchInputElement = screen.getByPlaceholderText("Search by Name...");
    fireEvent.change(SearchInputElement, { target: { value: "test" } });
    expect(SearchInputElement.value).toBe("test");
  });
});
