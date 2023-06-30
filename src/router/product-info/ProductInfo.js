import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import {BsFacebook,BsTelegram,BsTwitter,BsWhatsapp} from 'react-icons/bs'
import { AiFillStar, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import "./ProductInfo.css";
import { addToCart } from "../../context/cart";

import { useDispatch } from "react-redux";

function ProductInfo() {
  const dispatch = useDispatch();

  const data = useLocation().state;
   useEffect(()=>{
    window.scrollTo(0,0)
   },[])
  const [amount, setAmout] = useState(1);

  return (
    <div className="container">
      <div className="product__info__container">
        <div className="product__info" key={data.id}>
          <div className="left">
            <img src={data.url} alt="" />
          </div>
          <div className="right">
            <div className="top">
             
              <h1 className="info__title">{data.title}</h1>
              <p className="info__rating">
                <div className="rate">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />

                  <span>5.0 (585 baho)</span>
                </div>
                
              </p>
              
            </div>
            <div className="bottom">
              <div className="amount">
                
                <div className="price">
                  
                  
                    

                    <h3>{amount * data.price} so'm</h3>
                  
                </div>
                <div className="info__monthly">
                  <span>{Math.round((data.price * 1.44) / 12)} so'mdan / 12 oy </span>
                </div>
                <div className="brand">
                <h2>Поделиться: <BsFacebook/>
                <BsTelegram/>
                <BsTwitter/>
                <BsWhatsapp/></h2>
                
                </div>
                <div className="info__cart">
         
                  <button onClick={() => dispatch(addToCart(data))}
                  >Savatga qo'shish</button>
                
                  <button>Tugmani 1 bosishda xarid qilish</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__product__cart">
        <div className="bottom__navigation">
          <div>
            <p>Narx umumiy</p>
            <h4>{amount * data.price}</h4>
          </div>
          <div>
            <AiOutlineHeart />
          </div>
          <div>
            <button>Savatga qo'shish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
