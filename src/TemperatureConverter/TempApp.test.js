import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import TemperatureApp from "./TempApp";

test("renders learn react link", () => {
  const { container } = render(<TemperatureApp />);
  expect(container).toBeDefined();
});

describe("Render App", () => {
  test("Check app to be defined", () => {
    const { container } = render(<TemperatureApp />);
    expect(container).toBeDefined();
  });

it('should check element',()=>{
  render(<TemperatureApp />);
  const linkElement = screen.getByText(/Temperature App/i);
  expect(linkElement).toBeInTheDocument();

})



});
