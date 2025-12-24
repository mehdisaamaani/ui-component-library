import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { ReactNode } from "react";

export interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
