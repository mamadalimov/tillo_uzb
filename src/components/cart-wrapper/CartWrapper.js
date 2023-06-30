import React from 'react'
import './CartWrapper.css'

import {useDispatch} from 'react-redux'
import { addToCart,removeFromHeart,decrementCart } from '../../context/cart';
import { Link } from 'react-router-dom';



function CartWrapper({data}) {
  const dispatch =useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var text3 = document.getElementById("text3").value;

    let my_text = ` %0A Result is:%0AIsmi: ${text1} %0ATelfon raqami: ${text2} %0AUy manzil: ${text3} %0A` 
    data?.forEach(item=>{
      my_text+=`Nomi: ${item.title}%0A`
      my_text+=`Soni: ${item.quantitiy}%0A`
      my_text+=`Narxi: ${item.price}%0A%0A`
    })
    my_text += `Jami ${data?.reduce((a,b)=>a+ (b.price*b.quantitiy), 0)} so'm`  
    




    var token = "6136164070:AAGMcY6F0Zcz-lpAUQwctsFFrTmMInRoT3o";
    var chat_id = -978459049;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

    var api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log("Message successfully sent");
  };




  return (
    <div className='cart__wrapper' >
      
      <div className='cart__wrapper-content' >
      <h2>cart CartWrapper</h2>
      {
        data?.map((item)=> <div key={item.id} className='cart'  >
        <div className="kart2">
        <Link to={`/product/${item.id}`} state={item} >
        <img src={item.url} width={120} alt="" />
        
        </Link>
        </div>
       
        <div className="title">
        <h3>{item.title}<br /><br />
        <button onClick={()=> dispatch(removeFromHeart(item))} >Удалить</button>
        
        </h3><br />
        </div>
        <div className="mmm">
        <div className="count">
        <button disabled={item.quantitiy<= 1} onClick={()=> dispatch(decrementCart(item))} >-</button>
        <span>{item.quantitiy}</span>
        <button onClick={()=> dispatch(addToCart(item))} >+</button>
        </div>
        <div className="price">
        <h2>{item.price} so'm </h2>
        </div>
        </div>
        
       
        
        
        
        
        
        
        
        <br />
        <br />
       
        <br />
        
        </div> )
      }
      </div>
      <div className="cart__wrapper_form">
      <form id='form' onSubmit={handleSubmit}>
       <h3>buyurtma berish</h3>
       <input placeholder='Ismingizni kiriting' type="text" id='text1'  />
       <input placeholder='Telefon raqamingizni kiriting' type="text" id='text2'  />     
       <input placeholder='Manzilni kiritind' type="text" id='text3'  />

       <h3>Jami : {data?.reduce((a,b)=>a+ (b.price*b.quantitiy), 0)}</h3>
       <button type="submit" >Olish</button>
       </form>
      </div>
    </div>
  )
}

export default CartWrapper
