import React from 'react'
import './Wishlist1.css'
import {useDispatch} from 'react-redux'
import { addToCart,removeFromHeart,decrementCart } from '../../context/cart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Wishlist1({data}) {
 
  const dispatch =useDispatch()
  const heart =useSelector(s => s.heart.value)
 


  return (
    <div className='cart__wrapper1' >
      
      <div className='cart__wrapper-content1' >
      {
        data?.map((item)=> <div key={item.id} className='cart1'  >
        <div className="kart2">
        <Link to={`/product/${item.id}`} state={item} >
        <img src={item.url} width={120} alt="" />
        
        </Link>
        </div>
       
        <div className="title">
        <h3>{item.title}<br /><br />

        
        </h3><br />
        </div>
        <div className="mmm">
        
        <div className="price">
        <h2>{item.price} so'm </h2>
        </div>
        <div className="buton">
         <button onClick={(e) => dispatch(addToCart(item))} >Savatga</button>
        <button onClick={(e)=> dispatch(removeFromHeart(item))} >o'chirish</button>

        
        </div>
        </div>
        
       
        
        
        
        
        
        
        
        <br />
        <br />
       
        <br />
        
        </div> )
      }
      </div>
      </div>
  )
}

export default Wishlist1