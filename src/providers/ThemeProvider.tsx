"use client";

import { createTheme } from "@/shared/styles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const AppThemeProvider = ({ children }: PropsWithChildren) => (
  <CacheProvider value={rtlCache}>
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
);
