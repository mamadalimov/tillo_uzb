import React from 'react'
import tel from '../../assets/slider/tel.png'
import not from '../../assets/slider/not.png'
import pro from '../../assets/slider/pro.png'
import kir from '../../assets/slider/kir.png'
import idish from '../../assets/slider/idish.png'
import gantel from '../../assets/slider/gantel.png'
import parfum  from '../../assets/slider/parfum.png'
import yer from '../../assets/slider/yer.png'
import bolon from '../../assets/slider/bolon.png'
import uy from '../../assets/slider/uy.png'
import kiyim from '../../assets/slider/kiyim.png'
import kitob from '../../assets/slider/kitob.png'
import kreslo from '../../assets/slider/kreslo.png'
import usta from '../../assets/slider/usta.png'
import sovga from '../../assets/slider/sovga.png'
import veli from '../../assets/slider/veli.png'


function NavbarBottom() {

    const DATA = [
        {
            rasm: tel,
            name: "Телевизоры, фото-видео и аудио"
        },
        {
            rasm: not ,
            name: "Ноутбуки, принтеры, компьютеры"
        },
        {
            rasm: pro,
            name: "Смартфоны, телефоны, гаджеты, аксессуары"
        },
        {
            rasm: kir,
            name: "Бытовая техника"
        },
        {
            rasm: idish,
            name: "ТВсе для кухни"
        },
        {
            rasm: gantel,
            name: "Спорт товары"
        },
        {
            rasm: parfum,
            name: "Красота и здоровье"
        },
        {
            rasm: yer,
            name: "Товары из за рубежа"
        },
        {
            rasm: bolon,
            name: "Автотовары"
        },
        {
            rasm: uy,
            name: "Все для офиса, дома и сада"
        },
        {
            rasm: kiyim,
            name: "Одежда и обувь"
        },
        {
            rasm: kitob,
            name: "Книги"
        },
        {
            rasm: kreslo,
            name: "Мебель"
        },
        {
            rasm: usta,
            name: "Все для ремонта и строительства"
        },
        {
            rasm: sovga,
            name: "Подарки и сувениры"
        },
        {
            rasm: veli,
            name: "Игрушки и товары для детей"
        },
    ]

    return (
        <div className='container'>
            <ul className="nav__bottom-collection">

                {DATA?.map((item, id) => <div key={id} className="nav__bottom-item"> 
                
                <img src={item.rasm} alt="" />
                <li>{item.name}</li>
                


                </div>
                )}
            </ul>
        </div>
    )
}

export default NavbarBottom