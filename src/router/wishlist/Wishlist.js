import React from 'react'
import Empty from "../../components/empty/Empty"
import { useSelector } from 'react-redux'
import Wishlist1 from '../../components/wishlist/Wishlist1';
import ProductWrapper from '../../components/product-wrapper/ProductWrapper';

function Wishlist() {
    const heart = useSelector(s => s.heart.value)
    console.log(heart);
    return (
        <div className='container'>
        {
            heart.length ?
            <Wishlist1 data={heart}/>
            : 
            <Empty title="Sevimlilar" />
        }

        </div>
    )
}

export default Wishlist