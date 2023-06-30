import React from 'react'
import { BsGooglePlay, BsApple, BsInstagram, BsTelegram, BsYoutube, BsFacebook } from "react-icons/bs"
import "./Footer.css"
import { useLocation } from 'react-router-dom'
import { AiFillApple,AiFillInstagram,AiFillYoutube } from "react-icons/ai"
import { FaGooglePlay,FaTelegram,FaFacebook } from "react-icons/fa"
import {FcGoogle} from 'react-icons/fc'
import {FaAppStoreIos} from 'react-icons/fa'




const FOOTER = [
  "Мобильные приложения",
"Помощь",
"Платные услуги",
"Бизнес на OLX",
"Реклама на сайте",
"Условия использования",
"Политика конфиденциальности",
"Партнёры"
]
const FOOTER1 =[
  "Как продавать и покупать?",
"Правила безопасности",
"Карта сайта",
"Карта регионов",
"Карьера в OLX"
]


function Footer() {
    const { pathname }=useLocation()

    if(pathname.includes("/admin")){
     return  <></>
    }
    if(pathname.includes("/login")){
      return  <></>
     }

    return (
        <div className='container footer' >
        <div className="lii">
        {FOOTER?.map((item, id) => <ul key={id} className="item"> 
        <li>{item}</li>
        </ul>
        )}
        </div>
        <div className="lii">
        {FOOTER1?.map((item, id) => <ul key={id} className="item1"> 
        <li>{item}</li>
        </ul>
        )}
        </div>
        <div className="google">
         <button><FcGoogle/>Google Play</button>
         <button><FaAppStoreIos/>App Store</button>
        </div>
        </div>
    )
}

export default Footer