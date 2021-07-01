import { render, screen } from "@testing-library/react";
import PlatformFilter from "./PlatformFilter";

describe("Platform component", () => {
  test("Renders platform filter", () => {
    render(<PlatformFilter />);

    const platformElement = screen.getByText("Filter by Platform");
    expect(platformElement).toBeInTheDocument();
  });
});
