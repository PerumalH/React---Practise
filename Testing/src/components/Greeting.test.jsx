import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting One", () => {
  test("Render Greeting The", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const checktext = screen.getByText("Hello", { exact: false });

    expect(checktext).toBeInTheDocument();
  });

  test("NOt OnClick Button", () => {
    render(<Greeting />);

    const checktext1 = screen.queryByText("true", { exact: false });
    expect(checktext1).toBeNull();
  });
  test("OnClick Button", () => {
    render(<Greeting />);

    // const buttonElement = screen.getByRole("button");
    // userEvent.click(buttonElement);

    const checktext34 = screen.queryByText("Testing", { exact: false });
    expect(checktext34).toBeInTheDocument();
  });
  test("OnClick Button second", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const checktext2 = screen.getByText("true", { exact: false });
    expect(checktext2).toBeInTheDocument();

    userEvent.click(buttonElement);

    const checktext3 = screen.getByText("Testing", { exact: false });
    expect(checktext3).toBeInTheDocument();
  });
});
