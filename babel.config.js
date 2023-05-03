module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-react-docgen-typescript', {exclude: 'node_modules'}],
    [
      'module-resolver',
      {
        alias: {
          '@app': './src',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@styles': './src/styles',
          '@pages': './src/pages',
          '@layouts': './src/layouts',
        },
      },
    ],
  ],
};
