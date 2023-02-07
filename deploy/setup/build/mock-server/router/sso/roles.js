import express from 'express'
import { jsonParser } from '../middlewares/parser.js'

import { config } from 'dotenv'
import { ROLES } from './ROLE_TYPES.js'

config()

const router = express.Router()

router.get('/WSE_ADMIN/getUserRoleList.do', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.query)
  console.log(req.body)
  res.send(`{'code': '200', 'rolelist':'${_inMemory.join(';')}'}`.replaceAll("'", '&#039;'))
})

const _inMemory = [ROLES.IT_Admin_group, ROLES.IT_General_group]

export default router
