"use client";

import { createTheme } from "@/shared/styles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { deepmerge } from "@mui/utils";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

type AppThemeProviderType = {
  children: React.ReactNode;
  themeOverride?: any;
};
export const AppThemeProvider = ({
  children,
  themeOverride,
}: AppThemeProviderType) => {
  const theme = themeOverride
    ? deepmerge(createTheme(), themeOverride)
    : createTheme();

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppThemeProvider;
