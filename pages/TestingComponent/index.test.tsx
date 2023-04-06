import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestingComponent from "./index";

describe("test", () => {
  test("unit test1", () => {
    render(<TestingComponent />);
    expect(screen.getByText("管理平台")).toBeInTheDocument();
  });
});
