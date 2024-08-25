const boom = require('@hapi/boom')

function validatorHendeler (schema, property){
  return (req, res, next) =>{
    const data = req[property]
    const {error} = schema.validate(data)
    if(error) {
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = validatorHendeler;
