import express from 'express'
import chalk from 'chalk'
const router = express.Router()

let binaryColorsFlag = true

router.use((req, res, next) => {
  const content = [
    `[${new Date().toLocaleString()}]`,
    req.ip,
    req.method,
    req.originalUrl,
    Object.entries(req.headers || {}).map(([key, value]) => `${key}: ${value}`),
    req.cookies,
  ]
    .filter((r) => r)
    .join('\t\t')

  console.log(chalk[binaryColorsFlag ? 'blue' : 'green'](content))
  binaryColorsFlag = !binaryColorsFlag

  next()
})

export default router
