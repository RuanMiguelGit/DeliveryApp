const { sale, user, product, salesProducts } = require('../database/models');
const salesService = require('../service/salesService')

// callback criadas para testes das associações
const getAllSalesUser = async (req, res) => {
  const { data , err, code, messageError } = await salesService.getAllSalesUser()
  if (err) return res.status(code).json({messageError, message:err.message})
     return res.status(code).json(data)
};

const getAllSalesProducts = async (req, res) => {
  const { data , err, code, messageError } = await salesService.getAllSalesUser()
  if (err) return res.status(code).json({messageError, message:err.message})
     return res.status(code).json(data)
};
// ----------------------------------------------------------------------

// teste com POST **UTILIZAR CAMEL CASE NA CREATED**
const createSale = async (req, res) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    products,
    quantity } = req.body;
  const {code, id, err, messageError } =  await salesService.createSale(userId,
    sellerId, 
    totalPrice, 
    deliveryAddress, 
    deliveryNumber, 
    status,
    products,
    quantity )
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json(id);
};
// ----------------------------------------------------------------------

// callbacks validas
const getSalesByUser = async (req, res) => {
  const { email } = req.body;
  const { data , err, code, messageError } = await salesService.getSalesByUser(email)
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json(data)
};

const createRelation = async (_req, res) => {
  const { data , err, code, messageError } = await salesService.createRelation()
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json(data)
};

const getGeneratedSell = async (req, res) => {
  const { sellId } = req.body
  const { data , err, code, messageError } = await salesService.getGeneratedSell(sellId)
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json({data:[data]})
};

const getSellById = async (req, res) => {
  const { id, value } = req.body
  const { data , err, code, messageError } = await salesService.getSellById(id, value)
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json(data)
};

const getSell = async (req, res) => {
  const { id } = req.body
  const { data , err, code, messageError } = await salesService.getSell(id)
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json(data)
};

const updateStatusSale = async (req, res) => {
  const { id, value } = req.body
  const { data , err, code, messageError } = await salesService.getSellById(id,value)
  if (err) return res.status(code).json({messageError, message:err.message})
  return res.status(code).json(data)
};

module.exports = {
  getAllSalesUser,
  getAllSalesProducts,
  createSale,
  getSalesByUser,
  createRelation,
  getGeneratedSell,
  getSellById,
  getSell,
  updateStatusSale,
};
