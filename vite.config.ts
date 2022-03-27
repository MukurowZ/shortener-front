import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// For Type Script & Pug & Tailwind & PostCSS
import autoPreprocess from 'svelte-preprocess';
import path from 'path';
import * as autoprefixer from 'autoprefixer';

import postcss from './postcss.config.cjs';

// const projectRootDir = path.resolve(__dirname);

const production = false;

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  css: {
    postcss
  },
  plugins: [
    svelte({
			compilerOptions: {
				hydratable: true,
				// enable run-time checks when not in production
				dev: !production,
				// we'll extract any component CSS out into
				// a separate file - better for performance
			},
			preprocess: autoPreprocess({
				sourceMap: !production,
			})
		}),
  ]
})
