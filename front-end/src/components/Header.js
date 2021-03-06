import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './Button';
import {
  getUserName,
  getUserRole,
  clearUserInLocalStorage } from '../services/localStorage';

import '../Styles/Header.css';

export default function Header() {
  const history = useHistory();

  const logout = async () => {
    await clearUserInLocalStorage();
    history.push('/login');
  };

  return (
    <header>
      <div>
        <Button
          testId="customer_products__element-navbar-link-products"
          name="Produtos"
          btnclass="link-button"
          disable={ false }
          onClick={ () => history.push('/customer/products') }
        />
        <Button
          testId="customer_products__element-navbar-link-orders"
          name="Meus Pedidos"
          btnclass="link-button"
          disable={ false }
          onClick={ () => history.push(`/${getUserRole()}/orders`) }
        />
      </div>
      <div>
        <Button
          testId="customer_products__element-navbar-user-full-name"
          name={ getUserName() }
          btnclass="link-user"
          disable={ false }
          onClick={ () => console.log('user') }
        />
        <Button
          testId="customer_products__element-navbar-link-logout"
          name="Sair"
          btnclass="link-buttonLogout"
          disable={ false }
          onClick={ logout }
        />
      </div>
    </header>
  );
}
