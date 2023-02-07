import express from 'express'
import logger from './middlewares/logger.js'
import eai from './eai/index.js'
import sso from './sso/index.js'
import roles from './sso/roles.js'

const router = express.Router()

router.use([logger], eai)
router.use([logger], sso)
router.use([logger], roles)

export default router
