const { sale, product } = require('../database/models');
messageError = "Algo deu Errado"

const getAllProductsSales = async () => {
    try {
      const data = await product.findAll({
        include: [
          { model: sale, as: 'sales', through: { attributes: [] } },
        ],
      });
      return {code: 200, data};
    } catch (err) {
      return { messageError, err: err.message, code:500 };
    }
  };
  // ----------------------------------------------------------------------
  
  // callbacks validas
  const getProducts = async () => {
    try {
      const data = await product.findAll({
        attributes: { exclude: ['sales'] },
      });
      return {code: 200, data};
    } catch (err) {
        return { messageError, err: err.message, code:500 };
    }
  };
  
  module.exports = {
    getAllProductsSales,
    getProducts,
  };