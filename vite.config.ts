import { defineConfig } from 'vite'
import { relative, resolve } from 'path'
import copy from 'rollup-plugin-copy'
import fg from 'fast-glob'

const srcDir = resolve(__dirname, 'src')

const tsFiles = fg.sync('**/*.ts', { cwd: srcDir }).reduce(
  (obj, file) => {
    const key = file.replace(/\.ts$/, '')
    obj[key] = resolve(srcDir, file)
    return obj
  },
  {} as Record<string, string>,
)

export default defineConfig({
  build: {
    outDir: 'dist/cpyurl',
    rollupOptions: {
      input: tsFiles,
      output: {
        entryFileNames: (chunkInfo) => {
          const relativePath = relative(srcDir, chunkInfo.facadeModuleId!)
          return relativePath.replace(/\.ts$/, '.js')
        },
      },
      plugins: [
        // @ts-ignore
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
