import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@lib': path.resolve(__dirname, 'src/lib')
		}
	}
};

export default config;
