import express from 'express'
import { jsonParser } from '../middlewares/parser.js'

import { config } from 'dotenv'

config()

const businessServer = process.env.FRONTEND_URL || '//frontiers.kbstar.com:8080'

console.log(businessServer)

const router = express.Router()

router.post('/v1/oauth/token', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.query)
  console.log(req.body)
  res.send({
    access_token: 'hello world',
  })
})

router.get('/sso/signin', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.query)
  console.log(req.body)
  console.log({ businessServer })
  res.redirect(`${businessServer}/sso/checkauth.jsp?secureToken=123123`)
})

router.post('/sso/validateTicket', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.query)
  console.log(req.body)
  res.send({
    user: {
      id: 'S123123',
      name: '권미소',
      returnUrl: `${businessServer}`,
    },
  })
})

export default router
