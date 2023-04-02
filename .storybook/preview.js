import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme.ts"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    decorators: [
      (Story) => (
        <ThemeProvider theme={theme}>
          <body style={{ margin: 0, padding: 0, fontFamily: "Inter" }} />
          <Story />
        </ThemeProvider>
      ),
    ],
  };