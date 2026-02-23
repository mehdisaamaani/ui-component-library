import { createBarookTheme } from "@/shared/styles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeOptions } from "@mui/material/styles";
import { useMemo } from "react";

type AppThemeProviderType = {
  children: React.ReactNode;
  isTheme?: boolean;
  themeOverride?: ThemeOptions;
  direction?: "rtl" | "ltr";
  withCssBaseline?: boolean;
};

export const AppThemeProvider = ({
  children,
  themeOverride,
  direction = "rtl",
  withCssBaseline = false,
  isTheme = true,
}: AppThemeProviderType) => {
  const theme = useMemo(() => {
    return isTheme ? createBarookTheme(themeOverride) : createBarookTheme();
  }, [themeOverride]);

  const cache = useMemo(
    () =>
      createCache({
        key: direction === "rtl" ? "muirtl" : "mui",
        stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [],
      }),
    [direction],
  );

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {withCssBaseline && <CssBaseline />}
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppThemeProvider;
