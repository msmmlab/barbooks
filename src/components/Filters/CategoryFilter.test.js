import { render, screen } from "@testing-library/react";
// import mockAxios from "axios";
// import axios from "axios";
import CategoryFilter from "./CategoryFilter";

// jest.mock("axios");
// mockAxios.get.mockImplementation(() =>
//   Promise.resolve({ data: ["shooter", "racing"] })
// );

describe("Category filter", () => {
  test("renders correctly", () => {
    render(<CategoryFilter />);

    const filterElement = screen.getByPlaceholderText("Start typing...");
    expect(filterElement).toBeInTheDocument();
  });
});
