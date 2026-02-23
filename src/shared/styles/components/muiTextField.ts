import type { Components, Theme } from "@mui/material";
import { inputBaseClasses, outlinedInputClasses } from "@mui/material";
import { bgcolor, color, height } from "@mui/system";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    sm: true;
    md: true;
    lg: true;
  }
}
declare module "@mui/material/FormControl" {}
declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    lg: true;
    sm: true;
    md: true;
  }
}
declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputPropsSizeOverrides {
    lg: true;
  }
}
export const MuiTextField = (theme: Theme): Components["MuiTextField"] => ({
  defaultProps: {
    margin: "normal",
    fullWidth: true,
    size: "md",
  },
  styleOverrides: {
    root: {
      [`& .${outlinedInputClasses.disabled}`]: {
        background: theme?.palette?.grey[50],
        borderRadius: (theme.shape.borderRadius as number) * 1.5,
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.grey[300],
      },
    },
  },
});

export const MuiOutlinedInput = (
  theme: Theme,
): Components["MuiOutlinedInput"] => ({
  styleOverrides: {
    root: ({ ownerState }) => ({
      fontSize: theme.typography.pxToRem(14),
      backgroundColor: theme.palette.background.default,
      borderRadius: (theme.shape.borderRadius as number) * 1.5,
      color: theme.palette.text.primary,
      // Add padding left and right
      padding: theme.spacing(0, 1.5),

      [`:hover .${outlinedInputClasses.notchedOutline}`]: {
        // Disable hover effect when disabled
        ...(!ownerState.disabled && {
          border: `1px solid ${theme.palette.primary}`,
          boxShadow: `0 0 0 2px ${theme.palette.primary}`,
        }),
      },

      [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
        {
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.primary.main,
          boxShadow: `0 0 0 2px ${theme.palette.primary}`,
        },
      //error costume
      [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
        {
          borderColor: theme.palette.error[500],
        },
      error: {
        color: theme.palette.error[600],
      },
      // Handle touch-specific behavior
      [`@media (hover: none)`]: {
        [`:hover .${outlinedInputClasses.notchedOutline}`]: {
          ...(!ownerState.disabled && {
            border: `1px solid ${theme.palette.primary[100]}`,
            boxShadow: `0 0 0 2px ${theme.palette.primary[100]}`,
          }),
        },
      },
    }),
    notchedOutline: {
      border: 1,
      borderStyle: "solid",
      borderColor: theme.palette.grey[50],
    },
  },
  variants: [
    {
      props: { size: "sm", multiline: false },
      style: {
        [`&.${inputBaseClasses.root}`]: {
          padding: theme.spacing(0.5, 1),
          height: "32px",
        },
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("10px", "12px"),
          height: "32px",
        },
      },
    },
    {
      props: { size: "md", multiline: false },
      style: {
        [`&.${inputBaseClasses.root}`]: {
          padding: theme.spacing(1, 1.5),
          height: "40px",
        },
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("10px", "12px"),
          height: "40px",
        },
      },
    },
    {
      props: { size: "lg", multiline: false },
      style: {
        [`&.${inputBaseClasses.root}`]: {
          padding: theme.spacing(1.5, 2),
          height: "48px",
        },
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("10px", "12px"),
          height: "48px",
        },
      },
    },
  ],
});

export const MuiFormHelperText = ({
  spacing,
  typography,
}: Theme): Components["MuiFormHelperText"] => ({
  styleOverrides: {
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      ...typography.xs,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "inherit",
      paddingTop: spacing(1),
      margin: 0,
    },
  },
  variants: [
    {
      props: { margin: "dense" },
      style: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
  ],
});

export const MuiFormControl = ({
  spacing,
}: Theme): Components["MuiFormControl"] => ({
  styleOverrides: {
    marginNormal: {
      marginTop: spacing(1.25),
      marginBottom: spacing(1),
    },
  },
});
