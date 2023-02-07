import express from 'express'
import root from './router/index.js'

const port = process.env.NODE_PORT || 8081
const app = express()

app.use('/', root)

app.use(function (req, res, next) {
  if (/\.do$/i.test(req.path)) {
    res.redirect(req.path.replace(/\.do$/, ''));
    return;
  }
  next();
});

app.listen(port, () => console.log(`Mock server listening on port ${port}`))
