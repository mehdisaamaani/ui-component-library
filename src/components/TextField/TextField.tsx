import { TextField as MuiTextField, useTheme } from "@mui/material";
import { TextFieldProps } from "./TextField.types";
import type { ReactElement } from "react";

export const TextField = (props: TextFieldProps): ReactElement => {
  const theme = useTheme();

  const { variant = "outlined", fullWidth = true, ...rest } = props;

  return (
    <MuiTextField
      variant={variant}
      fullWidth={fullWidth}
      {...rest}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: theme.shape.borderRadius,
        },
      }}
    />
  );
};
