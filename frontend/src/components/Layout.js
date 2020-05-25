import React from 'react'
import Navigation from './Navigation'
import UserContextProvider from '../contexts/UserContext'
import ProductContextProvider from '../contexts/ProductContext'
import CartContextProvider from '../contexts/CartContext'

const Layout = ({ children }) => {
  return(
    <ProductContextProvider>
      <CartContextProvider>
        <UserContextProvider>
          <div className="layout">
            <Navigation />
            { children }
          </div>
        </UserContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default Layout
