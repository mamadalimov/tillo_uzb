import React from 'react'
import {BsFillTelephoneFill}  from 'react-icons/bs'
import { Link } from 'react-router-dom'


function NavbarTop() {

    return (
        <div className='navbar__top'>
            <div className="container navbar__top-wrapper">
                <div className='bu' >
                   <BsFillTelephoneFill className='tel1' />
                    <button>0% Муддатли тўлов </button>
                    <button> Чегирмалар</button>
                    <button> Ютуқли ўйинлар</button>
                    <span>Сайт харитаси
                    </span>
                </div>
                <div className="logo1">
                <Link to={'/'}>
                <h2>Tillo</h2>
                </Link>
                </div>
                <div className='tel' >
                    <p>+998 (71) 202 202 1</p>
                    <button>olcha да сотинг</button>
                    <h3 className='uz' >Ўзб</h3>
                    <h3 className='uz' >O'z</h3>
                    <h3>Рус</h3>
                </div>
                
            </div>
        </div>
    )
}

export default NavbarTop