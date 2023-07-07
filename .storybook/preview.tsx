import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles/theme/default';
import { GlobalStyle } from '../src/styles/global';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]

export default preview;
