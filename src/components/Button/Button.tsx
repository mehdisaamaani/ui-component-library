import { Button } from "@/shared/ui";
import React from "react";

interface ButtonStorybookProps {
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  color?: string;
}

const ButtonStorybook: React.FC<ButtonStorybookProps> = ({
  disabled,
  label,
  helperText,
  error,
  color = "default",
}) => {
  return (
    <Button color={color} disabled={disabled}>
      {label || "test"}
    </Button>
  );
};

export default ButtonStorybook;
