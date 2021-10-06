const productService = require('../service/productsService')

// callback criadas para testes das associações
const getAllProductsSales = async (req, res) => {
  const { data , err, code, messageError } = await productService.getAllProductsSales()
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json(data)
};
// ----------------------------------------------------------------------

// callbacks validas
const getProducts = async (_req, res) => {
  const { data , err, code, messageError } = await productService.getProducts()
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json(data)
};

module.exports = {
  getAllProductsSales,
  getProducts,
};