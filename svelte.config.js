import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Using vitePreprocess for preprocessor
  preprocess: vitePreprocess(),

  kit: {
  adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: 'index.html',
    strict: false
  }),

  paths: {
    base: '/statue'
  },

  alias: {
    $content: path.resolve('./content'),
    $lib: path.resolve('./src/lib')
  },

  prerender: {
  entries: ['/statue'],
  handleHttpError: 'ignore',
  handleUnseenRoutes: 'ignore'
}
}
};

export default config;