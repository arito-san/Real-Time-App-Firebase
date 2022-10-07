module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin', [
    'module-resolver',
    {
      root: ['./src'],
      extensions: [
        '.ts',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '@components': './src/components',
        '@styles': './src/styles/',
        '@assets': './src/assets',
        '@hooks': './src/hooks',
        '@services': './src/services',
        '@views': './src/views',
      },
    },
  ],
  ],
};
