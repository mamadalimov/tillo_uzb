import React from 'react'
import './CartWrapper.css'
import {AiFillDelete} from "react-icons/ai"
import {useDispatch} from 'react-redux'
import { addToCart,removeFromHeart,decrementCart } from '../../context/cart';



function CartWrapper({data}) {
  const dispatch =useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault();
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;

    var my_text = `Result is:%0A - Text1: ${text1} %0A - Text2: ${text2} ` ;

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
        <img src={item.url} width={80} alt="" />
        </div>
        <div className="kart1">
        <h3>{item.title}</h3><br />
        
        <div className="son">
        <div className="son4">
        <h2>{item.quantitiy*item.price} so'm </h2>
        </div>
        <div className="son2">
        <div className="count">
        <button disabled={item.quantitiy<= 1} onClick={()=> dispatch(decrementCart(item))} >-</button>
        <span>{item.quantitiy}</span>
        <button onClick={()=> dispatch(addToCart(item))} >+</button>
        </div>
        <p>Jami: {item.price} so'm</p>
        <button onClick={()=> dispatch(removeFromHeart(item))} ><AiFillDelete /></button>
        </div>
        </div>
        
        
        <br />
        <br />
        <hr />
        <br />
        </div>
        </div> )
      }
      </div>
      <div className="cart__wrapper_form">
      <form id='form' onSubmit={handleSubmit}>
       <h3>buyurtma berish</h3>
       <input type="text" id='text1'  />
       <input type="text" id='text2'  />     
       <h3>Jami : {data?.reduce((a,b)=>a+ (b.price*b.quantitiy), 0)}</h3>
       <button type="submit" >Olish</button>
       </form>
      </div>
    </div>
  )
}

export default CartWrapper
