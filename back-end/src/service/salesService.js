const { sale, user, product, salesProducts } = require('../database/models');

const messageError = 'Algo deu errado';

const getAllSalesUser = async () => {
    try {
      const data = await sale.findAll({
        attributes: { exclude: ['user_id', 'seller_id'] },
        include: [
          { model: user, as: 'user', attributes: { exclude: ['id'] } },
          { model: user, as: 'seller', attributes: { exclude: ['id'] } },
        ],
      });
      return { code:200, data };
    } catch (err) {
      return { messageError, err: err.message };
    }
  };

  const getAllSalesProducts = async () => {
    try {
      const data = await sale.findAll({
        attributes: { exclude: ['user_id', 'seller_id'] },
        include: [
          { model: product, as: 'products', through: { attributes: [] } },
        ],
      });
      return { code:200, data };
    } catch (err) {
      return { messageError, err: err.message, code:500 };
    }
  };
  // ----------------------------------------------------------------------
  
  // teste com POST **UTILIZAR CAMEL CASE NA CREATED**
  const createSale = async ( userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    products,
    quantity) => {
    try {
    const total = totalPrice.replace(/,/g, '.');
    const data = await
      sale.create({
      userId, sellerId, totalPrice: total, deliveryAddress, deliveryNumber, status, saleDate: new Date(),
      });
    const { id } = await sale.findOne({ where: { id: data.id } });
    await products.forEach((item, index) => {
      salesProducts.create({ [['sale_id']]: id, [['product_id']]: item, quantity: quantity[index] });
    });
    return { code:201, id };
    } catch (err) {
    return { messageError, err: err.message, code:500 };
  }
  };
  // ----------------------------------------------------------------------
  
  // callbacks validas
  const getSalesByUser = async (email) => {
    try {
      const { id, role } = await user.findOne({
        where: { email },
      });
      if (role === 'customer') {
        const data = await sale.findAll({
          where: { userId: id },
        });
        return { code:200,data };
      }
      const data = await sale.findAll({
        where: { sellerId: id },
      });
      return { code:200, data };
    } catch (err) {
        return { messageError, err: err.message, code:500 };
    }
  };
  
  const createRelation = async () => {
    try {
    const data = await salesProducts.findAll({});
    return { code:200, data };
    } catch (err) {
    return { messageError, err: err.message, code:500 };
    }
  };
  
  const getGeneratedSell = async (sellId) => {
    try {
      const data = await sale.findOne({
        where: { id: sellId },
        attributes: { exclude: ['user_id', 'seller_id'] },
        include: [
          { model: user, as: 'seller', attributes: ['name'] },
          { model: product, as: 'products', through: { attributes: ['quantity'] } }],
      });
      return { code:200, data };
    } catch (err) {
        return { messageError, err: err.message, code:500 };
    }
  };
  
  const getSellById = async (id, value) => {
    try {
      await sale.update({ status: value }, { where: { id } });
      const updated = await sale.findOne({ where: { id } });
      return {code:200, updated}
    } catch (err) {
        return { messageError, err: err.message, code:500 };
    }
  };
  
  const getSell = async (id) => {
    try {
      const updated = await sale.findOne({ where: { id } });
      return { code:200, updated }
    } catch (err) {
        return { messageError, err: err.message, code:500 };
    }
  };
  
  const updateStatusSale = async (id, value) => {
    try {
      await sale.update({ status: value }, { where: { id } });
      const updated = await sale.findOne({
        where: { id },
        attributes: { exclude: ['user_id', 'seller_id'] },
      });
  
      return { code:200, updated }
    } catch (err) {
        return { messageError, err: err.message, code:500 };
    }
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
  