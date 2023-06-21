import React from 'react'
import { BsGooglePlay, BsApple, BsInstagram, BsTelegram, BsYoutube, BsFacebook } from "react-icons/bs"
import "./Footer.css"
import { useLocation } from 'react-router-dom'
import { AiFillApple,AiFillInstagram,AiFillYoutube } from "react-icons/ai"
import { FaGooglePlay,FaTelegram,FaFacebook } from "react-icons/fa"

function Footer() {
    const { pathname }=useLocation()

    if(pathname.includes("/admin")){
     return  <></>
    }
    return (
        <div className='container footer' >
      <div className="footer__blog">
        <div className="footer__item1">
          <ul>
            <li><p>Foydalanuvchilarga</p></li>
            <li>Biz bilan bogʻlanish</li>
            <li>Savol-Javob</li>
          </ul>
        </div>
        <div className="footer__item1">
          <ul>
            <li><p>Tadbirkorlarga</p></li>
            <li>Uzumda soting</li>
            <li>Sotuvchi kabinetiga kirish</li>
          </ul>
        </div>
        <div className="footer__item1">
          <ul>
            <li><p>Biz haqimizda</p></li>
            <li>Topshirish punktlari</li>
            <li>Vakansiyalar</li>
          </ul>
        </div>
        <div className="footer__item2">
          <div className="footer__yu">
            <h5>Ilovani yuklab olish</h5>
           <div className="btn__div">
           <button><AiFillApple className='apple' /> AppStore</button>
           <button><FaGooglePlay className='playMarket' />Google Play</button>
           
           </div>
          </div>
          <div className="footer__icon">
            <h6>Uzum ijtimoiy tarmoqlarda</h6>
            <AiFillInstagram className='aass1'  />
            <FaTelegram className='aass' />
            <AiFillYoutube className='aass2' />
            <FaFacebook className='aass3' />
          </div>
        </div>
      </div>
      <div className="footer__end">
       <hr />
       <div className="footer__and">
       <p>Maxfiylik kelishuvi
       Foydalanuvchi kelishuvi</p>
       <h6>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</h6>
       </div>
      </div>
    </div>
    )
}

export default Footer