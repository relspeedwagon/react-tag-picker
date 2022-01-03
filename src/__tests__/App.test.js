import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renders 'Tag Picker' heading", () => {
  render(<App />);
  const TagPicker = screen.getByText(/Tag Picker/i);
  expect(TagPicker).toBeInTheDocument();
});
