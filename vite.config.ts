import postcss from './postcss.config.js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	css: { postcss },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
