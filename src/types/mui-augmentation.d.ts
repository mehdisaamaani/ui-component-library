import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    base: React.CSSProperties;
    xxs: React.CSSProperties;
    xs: React.CSSProperties;
    sm: React.CSSProperties;
    lg: React.CSSProperties;
    xl: React.CSSProperties;
    "2xl": React.CSSProperties;
    "3xl": React.CSSProperties;
    "4xl": React.CSSProperties;
    "5xl": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    base?: React.CSSProperties;
    xxs?: React.CSSProperties;
    xs?: React.CSSProperties;
    sm?: React.CSSProperties;
    lg?: React.CSSProperties;
    xl?: React.CSSProperties;
    "2xl"?: React.CSSProperties;
    "3xl"?: React.CSSProperties;
    "4xl"?: React.CSSProperties;
    "5xl"?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    base: true;
    xxs: true;
    xs: true;
    sm: true;
    lg: true;
    xl: true;
    "2xl": true;
    "3xl": true;
    "4xl": true;
    "5xl": true;
  }
}
