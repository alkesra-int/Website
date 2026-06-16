import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: isGitHubPages ? 'https://alkesra-int.github.io' : 'https://alkesra.com',
  base: isGitHubPages ? '/Website' : '/',
  output: 'static'
});
