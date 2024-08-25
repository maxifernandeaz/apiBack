const faker = require('faker/lib/locales/id_ID');
const joi = require('joi');

const idSchema = joi.string().uuid()
const name = joi.string().alphanum().min(3).max(10)
const price = joi.number().integer().min(10)


const schcemaProductCreate = joi.object({
  name: name.required(),
  price: price.required()
})

const updateSchemaProduct = joi.object({
  name: name,
  price: price
})

const getProductChema = joi.object({
  id: idSchema.required()
})


module.exports = {
  schcemaProductCreate,
  updateSchemaProduct,
  getProductChema
}
