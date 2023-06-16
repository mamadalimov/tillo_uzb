import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import CartWrapper from '../../components/cart-wrapper/CartWrapper';


function Cart() {
  const cart = useSelector(s=> s.cart.value)
  console.log(cart);
  return (
    <div className='container'>
      <CartWrapper/>
      <Empty title="Savat" />
    </div>
  )
}

export default Cart