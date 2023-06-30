import React from 'react'
import Slider from '../../components/slider/Slider'
import Products from '../../components/products/Products'
import NavbarBottom from '../../components/navbar/NavbarBottom'


function Home() {
    return (
        <div>
            <Slider />
            <NavbarBottom />
            <Products />
        </div>
    )
}

export default Home