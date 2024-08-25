const express = require('express');
const productServices = require('../services/servicesProducts')
const router = express.Router()
const validatorHendeler = require('../middleware/validator.handeler')
const { schcemaProductCreate, updateSchemaProduct, getProductChema} = require('../schema/schimaProduct')

router.get('/', async (req, res, next)=>{
  try {
    const products = await productServices.getAllProducts(req, res)
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.post('/', validatorHendeler(schcemaProductCreate, 'body'),
  async (req, res)=>{
  const createProduct = await productServices.createNewProduct(req, res)
  return createProduct
})

router.patch('/:id',
  validatorHendeler(getProductChema, 'params'),
  validatorHendeler(updateSchemaProduct, 'body'),
  async (req, res)=>{
  const updateProduct = await productServices.updateProduct(req, res)
  res.json(updateProduct)
})

router.delete('/:id', async (req, res)=>{
  const updateproduct = await productServices.updateProduct(req, res)
  return updateproduct
})

router.get('/:id', validatorHendeler(getProductChema, 'params'),
  async (req, res)=>{
  const getOneproduct = await productServices.getOneProdct(req, res)
  return getOneproduct
})



module.exports = router
