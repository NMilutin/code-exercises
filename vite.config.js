import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config = {
	optimizeDeps: {
		exclude: ['codemirror', '@codemirror/language-javascript' /* ... */]
	}
};

export default defineConfig({
	plugins: [sveltekit()]
});
