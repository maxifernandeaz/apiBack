const express = require('express');
const serverUsers = require('../services/serverUsers')
const router = express.Router()

router.get('/', async (req, res)=>{
  const getUsers = await serverUsers.getAllUsers(req, res)
  return getUsers
})


module.exports = router
