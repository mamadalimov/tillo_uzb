import React from 'react'
import './CartWrapper.css'
import {useDispatch} from 'react-redux'
import { addToCart,removeFromHeart,decrementCart } from '../../context/cart';



function CartWrapper({data}) {
   const dispatch =useDispatch()
  return (
    <div className='cart__wrapper' >
      
      <div className='cart__wrapper-content' >
      <h2>cart CartWrapper</h2>
      {
        data?.map((item)=> <div key={item.id} >
        <img src={item.url} width={80} alt="" />
        <h3>{item.title}</h3>
        <h2>{item.quantitiy*item.price} so'm </h2>
        <button disabled={item.quantitiy<= 1} onClick={()=> dispatch(decrementCart(item))} >-</button>
        <span>{item.quantitiy}</span>
        <button onClick={()=> dispatch(addToCart(item))} >+</button>
        <button onClick={()=> dispatch(removeFromHeart(item))} >ocirish</button>
        <p>{item.price} so'm</p>
        <br />
        <br />
        <hr />
        <br />
        </div> )
      }
      </div>
      <div className="cart__wrapper_form">
       <h3>buyurtma berish</h3>
       <input type="text" value="" />
       <input type="text" value="" />
       <input type="text" value="" />
       
       <h3>Jami : {data?.reduce((a,b)=>a+ (b.price*b.quantitiy), 0)}</h3>
      </div>
    </div>
  )
}

export default CartWrapper
