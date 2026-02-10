import "@mui/material/Typography";
import "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sm: true;
    xs: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    sm: React.CSSProperties;
    xs: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sm?: React.CSSProperties;
    xs?: React.CSSProperties;
  }
}
