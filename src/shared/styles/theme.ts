// createBarookTheme.ts
import {
  createTheme as createMuiTheme,
  ThemeOptions,
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { baseThemeOptions } from "./baseThemeOptions";
import { getComponentOverrides } from "./componentOverrides";

export const createBarookTheme = (overrides?: ThemeOptions) => {
  let theme = createMuiTheme(overrides ?? {});

  const mergedComponents = {
    ...(theme.components ?? {}),
  };
  theme = createMuiTheme(theme, {
    components: mergedComponents,
  });

  return theme;
};
