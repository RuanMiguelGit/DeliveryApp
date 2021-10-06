const usersService = require('../service/usersService')

const message = 'Algo deu errado';
// callback criadas para testes das associações
 const getAllUsersSale = async (req, res) => {
 const { data , err, code, message } = await usersService.getAllUsersSale()
 if (err) return res.status(code).json({message, message:err.message})
  return res.status(200).json(data)
};
// ----------------------------------------------------------------------

const getAllUsers = async (req, res) => {
const { data , err, code, message } = await usersService.getAllUsers()
if (err) return res.status(code).json({message, message:err.message})
   return res.status(200).json(data)
};
// callbacks validas

module.exports = {
  getAllUsersSale,
  getAllUsers,
};