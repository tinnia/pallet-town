import express from 'express'
import { jsonParser } from '../middlewares/parser.js'

import { config } from 'dotenv'

config()

const router = express.Router()

router.post('/futureTrade', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  res.send({})
})

router.put('/futureTrade', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  res.send({})
})

router.post('/futureProduct', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  res.send({})
})

router.put('/futureProduct', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  res.send({})
})

router.get('/ksa.web/rest/cutoff', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  res.send({
    tranAbilYn: '1',
  })
})

router.get('/ksa.web/rest/compliance', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  const random = Math.floor(Math.random() * 10) % 3
  const randomError = '0' + random.toString()
  res.send({
    cmplChkupRsultDstcd: '02',
    chkupPtrnDstcd: randomError,
  })
})

router.get('/ksa.web/rest/bostatus', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  const random = Math.floor(Math.random() * 3)
  if (random % 3 === 0) {
    res.send({
      IntgraTrdNo: 'X',
      New1stAthorYn: 'X',
      New2ndAthorYn: 'X',
      TradeStatusValue: '',
    })
  } else if (random % 3 === 1) {
    res.send({
      IntgraTrdNo: 'F123123',
      New1stAthorYn: '0',
      New2ndAthorYn: '0',
      TradeStatusValue: '승인 보류',
    })
  } else {
    res.send({
      IntgraTrdNo: 'F123123',
      New1stAthorYn: '1',
      New2ndAthorYn: '0',
      TradeStatusValue: '승인 완료',
    })
  }
})

router.get('/ksa.web/rest/packagelink', jsonParser, (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  const random = Math.floor(Math.random() * 3)
  if (random % 3 === 0) {
    res.send({
      telegramStatus: '미처리',
    })
  } else if (random % 3 === 1) {
    res.send({
      telegramStatus: '처리오류',
    })
  } else {
    res.send({
      telegramStatus: '처리완료',
    })
  }
})
export default router
