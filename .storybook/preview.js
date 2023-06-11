import { ThemeProvider } from "styled-components";

import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/global";

export const preview = {
  parameters: {
    background: {
      default: "ifome-light",
      values: [
        {
          name: "ifome-light",
          value: theme.colors.mainBg,
        },
        {
          name: "ifome-dark",
          value: theme.colors.darkGrey,
        },
      ],
    },
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
