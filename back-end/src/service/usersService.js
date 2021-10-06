const { sale, user } = require('../database/models');
const getAllUsersSale = async () => {
    try {
      const data = await user.findAll({
        include: [
          { model: sale, as: 'saleByUser', attributes: { exclude: ['user_id', 'seller_id'] } },
          { model: sale, as: 'saleBySeller', attributes: { exclude: ['user_id', 'seller_id'] } },
        ],
      });
      return {data, code:200};
    } catch (err) {
      return { message, err: err.message, code:500 };
    }
  };

  
  const getAllUsers = async () => {
    try {
      const data = await user.findAll({});
      return {data, code:200};
    } catch (err) {
        return { message, err: err.message, code:500 };
    }
  };

  module.exports  = {
      getAllUsersSale,
      getAllUsers
  }