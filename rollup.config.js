import path from "path";
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import alias from "@rollup/plugin-alias";
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

// For Type Script & Pug & Tailwind & PostCSS
import autoPreprocess from 'svelte-preprocess';

const projectRootDir = path.resolve(__dirname);

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		alias({
      entries: [
        { find: "@/src", replacement: path.resolve(projectRootDir, 'src') },
        { find: "@/types", replacement: path.resolve(projectRootDir, 'src/types') },
        { find: "@/layout", replacement: path.resolve(projectRootDir, 'src/layout') },
        { find: "@/public", replacement: path.resolve(projectRootDir, 'public') },
        { find: "@/app", replacement: path.resolve(projectRootDir, 'src/app') },
        { find: "@/components", replacement: path.resolve(projectRootDir, 'src/components') },
        { find: "@/util", replacement: path.resolve(projectRootDir, 'src/util') },
        { find: "@/stores", replacement: path.resolve(projectRootDir, 'src/stores') }
      ]
    }),
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
				postcss: {
					plugins: [
						require('autoprefixer')(),
						require('tailwindcss')(),
					],
				}
			})
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

		// For Type Script
		// typescript({ sourceMap: !production })
	],
	watch: {
		clearScreen: false
	}
};
