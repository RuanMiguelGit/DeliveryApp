/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrdersSellerTable from '../components/OrdersSellerTable';
import Header from '../components/Header';
import { sendData, updateSale } from '../services/apiRequest';

export default function DetailsSellersOrders() {
  const [loading, setLoading] = useState(false);
  // const [disable, setDisable] = useState(true);
  // const [saleData, setSaleData] = useState([])
  // let [able, setAble] = useState(false);
  const [currentSell, setCurrentSell] = useState([]);
  const { id } = useParams();
  const thounsand = 1000;
  // const preparando = "Preparando"
  // const transit = "Em Trânsito"

  useEffect(() => {
    setLoading(true);
    sendData('http://localhost:3001/sale/created', id)
      .then((res) => {
        setCurrentSell(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    setLoading(false);
  }, [id]);

  // const StatusPreparando = (id) => {
  //   setLoading(true);
  //   getSell('http://localhost:3001/salesId', id, preparando)
  //     .then((data) => {
  //       setSaleData(data.data.status);
  //     });
  //   setLoading(false);
  // }

  // const StatusSaiuParaEntrega = (id) => {
  //   setLoading(true);
  //   getSell('http://localhost:3001/salesId', id, transit)
  //     .then((data) => {
  //       setSaleData(data.data.status);
  //     });
  //   setLoading(false);
  // }

  const updateOnClick = (idSale, status) => {
    setLoading(true);
    updateSale('http://localhost:3001/update/sale', idSale, status)
      .then(({ data }) => {
        const updateSell = { ...currentSell[0], ...data };
        console.log(updateSell);
        setCurrentSell([updateSell]);
      });
    setLoading(false);
  };

  // useEffect(() => {
  //   if (saleData === "Preparando" || saleData === "Entregue") {
  //     // setDisable(false)
  //     // setAble(true)
  //   }
  // }, [currentSell]);

  return (
    <div>
      <Header />
      <OrdersSellerTable
        orders={ currentSell }
        loading={ loading }
        thounsand={ thounsand }
        // disable={disable}
        // a={able}
        // getSale={StatusPreparando}
        // saleInTransit={StatusSaiuParaEntrega}
        updateOnClick={ updateOnClick }
        dataTestBegin="seller_order_details__"
      />
      {/* {loading ? <p>Carregando</p> : console.log(currentSell) } */}
    </div>
  );
}
