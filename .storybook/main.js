const path = require('react-native-path');

module.exports = {
  stories: ['../src/components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, {configType}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@app': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@styles': path.resolve(__dirname, '../src/styles'),
    };
    return config;
  },
};
