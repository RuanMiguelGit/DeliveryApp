/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrdersTable from '../components/OrdersTable';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sendData, updateSale } from '../services/apiRequest';

export default function DetailsCustomerOrders() {
  const [loading, setLoading] = useState(false);
  const [currentSell, setCurrentSell] = useState([]);
  const { id } = useParams();
  const thounsand = 1000;

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

  return (
    <div>
      <Header />
      <OrdersTable
        orders={ currentSell }
        loading={ loading }
        thounsand={ thounsand }
        updateOnClick={ updateOnClick }
        dataTestBegin="customer_order_details__"
      />
      <Footer />

    </div>
  );
}
