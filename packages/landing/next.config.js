const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withSCSS = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ['reusecore', 'common'],
      },
    ],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
    withCSS,
    withSCSS,
  ],
  {
    distDir: '../../dist/functions/next',
  }
);
