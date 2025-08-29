import { defineConfig } from 'vite'
import { resolve } from 'path'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  build: {
    outDir: 'dist/cpyurl',
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background/index.ts'),
        notification: resolve(__dirname, 'src/notification/index.ts'),
      },
      output: {
        entryFileNames: '[name].js', // Ensures output files are named background.js, notification.js, etc.
      },
      plugins: [
        copy({
          targets: [
            { src: 'manifest.json', dest: 'dist/cpyurl' },
            { src: 'assets/img/*', dest: 'dist/cpyurl/images' },
          ],
          hook: 'writeBundle',
        }),
      ],
    },
  },
})
