import { TextField as MuiTextField, useTheme } from "@mui/material";
import { TextFieldProps } from "./TextField.types";
import { forwardRef, JSX, type ReactElement } from "react";
import {
  HelperTextContent,
  HelperTextProps,
  IconButton,
  SvgIcon,
} from "@/shared/ui";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      placeholder,
      label,
      helperText,
      error,
      slotProps,
      disabled,
      onClearStart,
      onClearEnd,
      CloseIcon,
      ...props
    },
    ref,
  ): JSX.Element {
    const helperTextType: HelperTextProps["type"] = error ? "error" : "info";

    return (
      <MuiTextField
        margin="none"
        label={undefined}
        disabled={disabled}
        placeholder={placeholder}
        helperText={
          !!helperText && (
            <HelperTextContent type={helperTextType}>
              {helperText}
            </HelperTextContent>
          )
        }
        slotProps={{
          input: {
            endAdornment:
              onClearEnd && props.value ? (
                <IconButton
                  disabled={disabled}
                  size="small"
                  onClick={onClearEnd}
                >
                  <SvgIcon component={CloseIcon} fontSize="small" />
                </IconButton>
              ) : null,
            startAdornment:
              onClearStart && props.value ? (
                <IconButton
                  disabled={disabled}
                  size="small"
                  onClick={onClearStart}
                >
                  <SvgIcon component={CloseIcon} fontSize="small" />
                </IconButton>
              ) : null,
            ...slotProps?.input,
          },
          ...slotProps,
        }}
        error={error}
        inputRef={ref}
        {...props}
      />
    );
  },
);
