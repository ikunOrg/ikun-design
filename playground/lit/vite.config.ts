import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ ],
  build:{
    rollupOptions:{
      input: './src/my-element.ts',
      output:{
        format: 'esm',
        exports: 'named',
        inlineDynamicImports: false,
        chunkFileNames: '[format]/[name].js',
        entryFileNames: '[format]/[name].js',
        sourcemap: true,
      },
      // external: ['svelte'],
    },
    target:'es2018',
    minify: false,
    outDir: 'dist',

  }
})
