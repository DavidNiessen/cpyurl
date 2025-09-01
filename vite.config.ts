import fg from 'fast-glob'
import { relative, resolve } from 'path'
import { defineConfig } from 'vite'

const OUT_DIR = resolve(__dirname, 'dist')
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
    outDir: OUT_DIR,
    rollupOptions: {
      input: tsFiles,
      output: {
        entryFileNames: (chunkInfo) => {
          const relativePath = relative(srcDir, chunkInfo.facadeModuleId!)
          return relativePath.replace(/\.ts$/, '.js')
        },
      },
    },
  },
  publicDir: 'static',
})
