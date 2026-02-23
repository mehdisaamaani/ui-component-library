// createBarookTheme.ts
import {
  createTheme as createMuiTheme,
  ThemeOptions,
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { baseThemeOptions } from "./baseThemeOptions";
import { getComponentOverrides } from "./componentOverrides";

export const createBarookTheme = (overrides?: ThemeOptions) => {
  let theme = createMuiTheme(deepmerge(baseThemeOptions, overrides ?? {}));

  theme = createMuiTheme(theme, {
    components: getComponentOverrides(theme),
  });

  return theme;
};
