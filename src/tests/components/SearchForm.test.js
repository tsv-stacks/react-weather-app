import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  test("renders the input field and button", () => {
    const { getByPlaceholderText, getByRole } = render(<SearchForm />);
    const inputElement = getByPlaceholderText("Search Location...");
    const buttonElement = getByRole("button");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect({ getByPlaceholderText, getByRole }).toMatchSnapshot();
  });

  test("calls onSearch prop when the button is clicked", () => {
    const mockOnSearch = jest.fn();
    const { getByRole, getByDisplayValue } = render(
      <SearchForm onSearch={mockOnSearch} />
    );
    const inputElement = getByDisplayValue("");
    const buttonElement = getByRole("button");
    fireEvent.change(inputElement, { target: { value: "London" } });
    fireEvent.click(buttonElement);
    expect(mockOnSearch).toHaveBeenCalledWith("London");
  });

  test("updates the search text when input value changes", () => {
    const { getByDisplayValue } = render(<SearchForm />);
    const inputElement = getByDisplayValue("");
    fireEvent.change(inputElement, { target: { value: "New York" } });
    expect(inputElement.value).toBe("New York");
  });
});
