import fs from 'fs'
import chalk from 'chalk'

const show = (filename) => {
  console.log(chalk.bold.green(`--- ${filename}`))
  console.log(chalk.bold(fs.readFileSync(filename, 'utf8')))
}

show('index.mjs')
show('index.js')
