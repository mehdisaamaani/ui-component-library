import React from "react";
import type { Decorator, Preview } from "@storybook/react-vite";
import AppThemeProvider from "../src/providers/ThemeProvider";
const preview: Preview = {
  decorators: [
    (_Story) => {
      return (
        <AppThemeProvider>
          <_Story />
        </AppThemeProvider>
      );
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
