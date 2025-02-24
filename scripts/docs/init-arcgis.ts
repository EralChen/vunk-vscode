import fs from 'node:fs'
import path from 'node:path'
import { docRoot, workRoot } from '@lib-env/path'
import { gulpTask } from '@vunk/shared/function'
import { run } from '@vunk/shared/node/process'
import { series } from 'gulp'

const inputAssets = path.resolve(workRoot, './node_modules/@arcgis/core/assets')
const appPublicDir = path.resolve(docRoot, './public')

export default series(
  gulpTask('clean', async () => {
    await run('rm -rf Esri', appPublicDir)
  }),
  gulpTask('add', async () => {
    copyFiles(inputAssets, path.resolve(appPublicDir, 'Esri'))
  }),
)

function copyFiles (srcDir: string, destDir: string) {
  const files = fs.readdirSync(srcDir)
  for (const file of files) {
    const srcPath = path.join(srcDir, file)
    const destPath = path.join(destDir, file)
    if (fs.statSync(srcPath).isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true })
      copyFiles(srcPath, destPath)
    }
    else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}
