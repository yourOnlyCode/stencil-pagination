import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'stencil-form-app',
  globalStyle: 'src/global.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    postcss({
      plugins: [require('tailwindcss'), autoprefixer()]
    })
  ]
};
