import React from "react";
import { render } from "@testing-library/react";
import PostCard from "./PostCard"; // Importe o componente a ser testado

describe("PostCard Component", () => {
  it("renders without errors", () => {
    render(<PostCard />);
  });
});