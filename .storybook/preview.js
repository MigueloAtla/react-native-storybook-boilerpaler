import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import {theme} from '../src/styles/theme';
import {ThemeProvider} from '@emotion/react';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },

    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
];
