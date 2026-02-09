import type { Components, Theme } from "@mui/material";
import { inputBaseClasses, outlinedInputClasses } from "@mui/material";

declare module "@mui/material/TextField" {}
declare module "@mui/material/FormControl" {}
declare module "@mui/material/InputBase" {}

export const MuiTextField = (theme: Theme): Components["MuiTextField"] => ({
  defaultProps: {
    margin: "normal",
    fullWidth: true,
    size: "medium",
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

export const MuiOutlinedInput = (theme: Theme): Components["MuiOutlinedInput"] => ({
  styleOverrides: {
    root: ({ ownerState }) => ({
      fontSize: theme.typography.pxToRem(14),
      backgroundColor: theme.palette.background.default,
      borderRadius: (theme.shape.borderRadius as number) * 1.5,

      // Add padding left and right
      padding: theme.spacing(0, 1.5),

      [`:hover .${outlinedInputClasses.notchedOutline}`]: {
        // Disable hover effect when disabled
        ...(!ownerState.disabled && {
          border: `1px solid ${theme.palette.secondary[100]}`,
          boxShadow: `0 0 0 2px ${theme.palette.secondary[100]}`,
        }),
      },

      [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        border: 1,
        borderStyle: "solid",
        borderColor: theme.palette.secondary[300],
      },

      // Handle touch-specific behavior
      [`@media (hover: none)`]: {
        [`:hover .${outlinedInputClasses.notchedOutline}`]: {
          ...(!ownerState.disabled && {
            border: `1px solid ${theme.palette.secondary[100]}`,
            boxShadow: `0 0 0 2px ${theme.palette.secondary[100]}`,
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
      props: { size: "small", multiline: false },
      style: {
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("6px", "6px"),
        },
      },
    },
    {
      props: { size: "medium", multiline: false },
      style: {
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("9px", "6px"),
        },
      },
    },
    {
      props: { size: "medium", multiline: true },
      style: {
        [`&.${inputBaseClasses.root}`]: {
          padding: theme.spacing("9px", "6px"),
        },
      },
    },
  ],
});

export const MuiFormHelperText = ({ spacing, typography }: Theme): Components["MuiFormHelperText"] => ({
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

export const MuiFormControl = ({ spacing }: Theme): Components["MuiFormControl"] => ({
  styleOverrides: {
    marginNormal: {
      marginTop: spacing(1.25),
      marginBottom: spacing(1),
    },
  },
});
