import {defineConfig} from 'tsup';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json')

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'cjs',
  sourcemap: true,
  clean: true,
  external: Object.keys(pkg.devDependencies ?? {})
})
