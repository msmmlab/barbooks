import { render, screen } from "@testing-library/react";
import Billboard from "./Billboard";

describe("Billboard component", () => {
  test("renders slogan", () => {
    render(<Billboard />);

    const sloganElement = screen.getByText(
      "Find and Track the best free-to-play games!"
    );
    expect(sloganElement).toBeInTheDocument();
  });
});
