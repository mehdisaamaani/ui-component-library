import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("render without crashing", () => {
    render(<TextField />);
  });
  it("apply default variant", () => {
    render(<TextField label="Email" />);
    const input = screen.getByLabelText("Email");
    expect(input).toBeInTheDocument();
  });
  it("passes props thro MUI TextField", () => {
    const label = "Email";

    render(<TextField label={label} placeholder="Enter email" disabled />);

    const input = screen.getByLabelText(label) as HTMLInputElement;

    expect(input.disabled).toBe(true);
  });
});
