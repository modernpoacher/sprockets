import debug from 'debug'

import path from 'node:path'

import {
  readFile,
  writeFile
} from 'node:fs/promises'

import {
  currentDir,
  sourcePath,
  targetPath
} from '#build/paths'

const log = debug('@modernpoacher/sprockets/build/transform')

log('`sprockets` is awake')

// eslint-disable-next-line no-irregular-whitespace
// \u200b
// ✓ \u2713
// • \u2022

const CSS = /(<style.*>)[ -~"'+-:;,#%{}()/*\n\s\u200b\u2713\u2022]*(<\/style>)/gm // eslint-disable-line no-irregular-whitespace

const SOURCE_PATH = path.relative(currentDir, sourcePath)
const TARGET_PATH = path.relative(currentDir, targetPath)

async function getCss () {
  log('getCss')

  const filePath = path.join(SOURCE_PATH, 'css/preview-head.css')
  const fileData = await readFile(filePath, 'utf8')

  return `$1\n${fileData.trim()}\n$2`.trim()
}

export default async function transform () {
  log('transform')

  const htmlFilePath = path.join(TARGET_PATH, 'preview-head.html')

  return (await writeFile(htmlFilePath, (await readFile(htmlFilePath, 'utf8')).replace(CSS, await getCss()), 'utf8'))
}
