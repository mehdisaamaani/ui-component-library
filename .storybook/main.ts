import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  framework: "@storybook/react-vite",

  stories: ["../src/**/*.stories.@(ts|tsx)", "../src/**/*.mdx"],

  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],

  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
};

export default config;
