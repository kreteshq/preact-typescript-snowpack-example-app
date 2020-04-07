import ts from '@wessberg/rollup-plugin-ts';
import { snowpackImportRewriter } from 'huncwot/compiler/typescript';

export default {
  input: 'config/client/index.tsx',
  output: {
    dir: 'public',
    sourcemap: true,
    paths: {
      // tslib: 'https://cdn.pika.dev/tslib@^1.10.0'
      tslib: '/modules/tslib.js'
    }
  },
  external: id => id.startsWith('/modules') || id == 'tslib',
  watch: {
    chokidar: true,
    exclude: 'node_modules/**'
  },
  plugins: [
    ts({
      tsconfig: 'config/client/tsconfig.json',
      transformers: {
        after: [snowpackImportRewriter()]
      }
    }),
  ]
};
