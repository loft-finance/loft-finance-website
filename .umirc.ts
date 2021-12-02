import { defineConfig } from 'umi';

import routers from './src/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'Loft Protocol',
  favicon: 'static/favicon.png',
  history: { type: 'hash' },
  hash: true,
  routes: routers,
  fastRefresh: {},
});
