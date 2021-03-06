import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { ReplaceCamelWithSpace } from "./App";

test('btn is red in initial with "Change to blue" text', () => {
  render(<App />);

  //find an element with a role of button and text of 'Change to blue'
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect the bgColor to be red
  expect(colorBtn).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click btn
  fireEvent.click(colorBtn);

  //expect the bgColor to be blue
  expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });

  //expect the text to be 'Chenge to Red'
  expect(colorBtn).toHaveTextContent("Change to Medium Violet Red");
});

test("initial checkbox and enable btn", () => {
  render(<App />);

  //check that the btn starts out enabled
  const btn = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(btn).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox clicked", () => {
  render(<App />);

  const btn = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  //click checkbox
  fireEvent.click(checkbox);
  expect(btn).toBeDisabled();

  //when click checkbox another time
  fireEvent.click(checkbox);
  expect(btn).toBeEnabled();
});

test("Disabled btn has gray BgColor and reverts to red", () => {
  render(<App />);

  const btn = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Disabled btn has gray BgColor and reverts to blue", () => {
  render(<App />);

  const btn = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  fireEvent.click(btn);

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("space before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(ReplaceCamelWithSpace("Red")).toBe("Red");
  });
  test("works for one inner capital letters", () => {
    expect(ReplaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(ReplaceCamelWithSpace("MidnightBlueSky")).toBe("Midnight Blue Sky");
  });
});
