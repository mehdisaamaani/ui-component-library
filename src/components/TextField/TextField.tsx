import { TextField as MuiTextField } from "@mui/material";
import { TextFieldProps } from "./TextField.types";
import type { ReactElement } from "react";

export const TextField = (props: TextFieldProps): ReactElement => {
  const { variant = "outlined", fullWidth = true, ...rest } = props;

  return <MuiTextField variant={variant} fullWidth={fullWidth} {...rest} />;
};
