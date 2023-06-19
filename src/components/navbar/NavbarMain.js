import React, {useState} from 'react'
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineHome } from "react-icons/ai"
import {Link} from "react-router-dom"
import SiteBar from '../sitebar/SiteBar'


function NavbarMain() {
    const [show, setShow] = useState(false)
    return (
        <>
        <div className='container navbar__main'>
            <Link to={"/"} className="nav__logo">uzum market</Link>
            <button onClick={()=>setShow(true)} className='nav__btn'>
                <AiOutlineMenu />
                <span>Katalog</span>
            </button>
            <div className="nav__search">
                <input type="text" placeholder='Qidirish...' />
                <button><AiOutlineSearch /></button>
            </div>
            <ul className="nav__collection">
                <Link to={"/"} className="nav__item">
                    <AiOutlineHome />
                    <span>Bosh sahifa</span>
                </Link>
                <Link to={"/account"} className="nav__item">
                    <AiOutlineUser />
                    <span>Kirish</span>
                </Link>
                <Link to={"/wishlist"} className="nav__item">
                    <AiOutlineHeart />
                    <span>Saralangan</span>
                </Link>
                <Link to={"/cart"} className="nav__item">
                    <AiOutlineShoppingCart />
                    <span>Savatcha</span>
                </Link>
            </ul>
        </div>
        <SiteBar show={show}  setShow={setShow} />
        </>
    )
}

export default NavbarMain