import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import GameCard from "./GameCard";

test("renders GameCard", () => {
  const history = createMemoryHistory();
  const game = { title: "TestGame", id: "9o2o1" };
  render(
    <Router history={history}>
      <GameCard game={game} />
    </Router>
  );

  expect(screen.getByText("TestGame")).toBeInTheDocument();
});
