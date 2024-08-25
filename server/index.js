const express = require('express');

const producstRouter = require('../routes/products')
const usersRouter = require('../routes/users')


function apiRouter (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', producstRouter)
  router.use('/users', usersRouter)
}


module.exports = apiRouter
