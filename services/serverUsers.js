

const getAllUsers = (req, res) => {
  const {limit, offset} = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay ningun parmetro')
  }
}


module.exports = {
  getAllUsers
}
