const faker = require('faker');
const boom = require('@hapi/boom')

const getAllProducts = (req, res) => {
  try {
    const products = []
    const { size } = req.query
    const limit = size || 5
    for (let index = 0; index < limit; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 100),
        image: faker.image.imageUrl(),
      })
    }
    return products
  } catch (error) {
    console.log(error);
  }
}



const createNewProduct = (req, res) => {
  try {
    const body = req.body
    console.log(body);
    res.json({
      ok: true,
      data: body
    })
  } catch (error) {
    console.log(error);
  }
}

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    // Aquí puedes realizar la lógica para actualizar el producto usando el id.
    // Por ejemplo, verificar si existe en tu base de datos.

    res.json({
      Message: 'success',
      product: body,
      id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

const deleteProduct = (res, req) => {
  try {
    const { id } = req.params
    res.json({
      message: 'delete',
      id,
    })
  } catch (error) {
    console.log(error);
  }
}

const getOneProdct = (req, res) => {
  try {
    const { id } = req.params;

    // Verifica que id esté definido
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

    res.json({
      id: id,
      name: 'Teclado',
      precio: 2000,
      category: 'tecnology'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports =
{
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getOneProdct
}
