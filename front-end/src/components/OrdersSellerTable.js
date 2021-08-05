import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const OrdersSellerTable = ({
  orders, loading, thounsand, dataTestBegin, updateOnClick }) => {
  const status = {
    1: 'Pendente',
    2: 'Preparando',
    3: 'Em Trânsito',
    4: 'Entregue',
  };

  return (
    <div>
      <div className="OrdersTable">
        {loading ? <p>Carregando</p> : orders.map((item) => (
          <table key={ item.id }>
            <thead>
              <tr>
                <th
                  data-testid={
                    `${dataTestBegin}element-order-details-label-order-id`
                  }
                >
                  Detalhes de Pedido
                  {(item.id * thounsand)
                    .toString()
                    .split('')
                    .reverse()
                    .join('') }
                </th>
                {'  '}
                <th
                  data-testid={
                    `${dataTestBegin}element-order-details-label-order-date`
                  }
                >
                  {new Date(item.saleDate).toLocaleDateString('pt-BR')}
                </th>
                {'  '}
                <th
                  data-testid={
                    `${dataTestBegin}element-order-details-label-delivery-status`
                  }
                >
                  {item.status }
                </th>
                {'  '}
                <th>
                  <Button
                    name="PREPARAR PEDIDO"
                    testId="seller_order_details__button-preparing-check"
                    disable={ item.status === status[2]
                    || item.status === status[3]
                    || item.status === status[4] }
                    // onClick={() => getSale(item.id)}
                    onClick={ () => updateOnClick(item.id, 'Preparando') }
                  />
                </th>
                <th>
                  <Button
                    name="SAIU PARA ENTREGA"
                    testId="seller_order_details__button-dispatch-check"
                    disable={ item.status === status[1]
                      || item.status === status[3]
                      || item.status === status[4] }
                    // onClick={ ()=> saleInTransit(item.id) }
                    onClick={ () => updateOnClick(item.id, 'Em Trânsito') }
                  />
                </th>
              </tr>
            </thead>
          </table>
        ))}
      </div>
      <table className="OrdersData">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {loading ? 'Carregando' : orders.map((item) => item.products
            .map((obj, i) => (
              <tr key={ obj.id }>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-item-number-${i}`
                  }
                  className="tableId"
                >
                  {i + 1 }
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${i}`
                  }
                  className="tableDesc"
                >
                  {obj.name}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${i}`
                  }
                  className="tableQua"
                >
                  {obj.salesProducts.quantity}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${i}`
                  }
                  className="tableVal"
                >
                  {obj.price.replace(/\./g, ',')}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-total-price-${i}`
                  }
                  className="tableTotal"
                >
                  {
                    (obj.salesProducts.quantity * obj.price)
                      .toFixed(2).replace(/\./g, ',')
                  }
                </td>
              </tr>
            )))}
          <div>
            <h1
              data-testid="seller_order_details__element-order-total-price"
            >
              Total: R$
              {' '}
              {loading ? <p>Carregando</p>
                : orders.map((item) => item.totalPrice.replace(/\./, ','))}
            </h1>
          </div>
        </tbody>
      </table>
    </div>
  );
};

OrdersSellerTable.propTypes = {
  orders: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
  thounsand: PropTypes.string.isRequired,
  dataTestBegin: PropTypes.string.isRequired,
  updateOnClick: PropTypes.func.isRequired,
};
export default OrdersSellerTable;
