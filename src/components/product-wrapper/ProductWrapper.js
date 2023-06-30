import React from "react";
import "./ProductWrapper.css";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart
} from "react-icons/ai";
import { FiTrash2 } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
import { useSelector } from "react-redux";
import { addToCart } from "../../context/cart";
import { db } from "../../server";
import { deleteDoc, doc } from "firebase/firestore";
import { toggle } from "../../context/proReload";
import { toast } from "react-toastify";

function ProductWrapper({ data, admin }) {
  const dispatch = useDispatch();
  const heart = useSelector(s => s.heart.value)

  
  const handleDelete = async (id)=>{
    await deleteDoc(doc(db, "products", id))
    .then(res => {
     dispatch(toggle())
     console.log(res)
     toast.warn('deleted!', {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
    })
    .catch(res => console.log(res))
 
   }
 

  return (
    <div className="products">
      {data?.map((item) => (
        <div key={item.id} className="card">
          <Link to={`/product/${item.id}`} state={item} className="card__image">
            <img src={item.url} alt="" />
          </Link>
          <button className="card__heart">
          {
            admin ?
              <button onClick={() => handleDelete((item.id))} className="price__cart">
                <FiTrash2 />
              </button> :
              <button onClick={() => dispatch(addToCart(item))} className="price__cart">
                <AiOutlineShoppingCart />
              </button>



          }
            {
              heart.some(i => i.id === item.id) ?
                <AiFillHeart onClick={() => dispatch(removeFromHeart(item))} /> :
                <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
            }
          </button>
          <div className="card__body">
            <h1 className="card__title">{item.title.slice(0,38)}</h1>
            <p className="card__rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              


              <span>5.0 (585 baho)</span>
            </p>
            
            
              <div className="card__monthly">
              <h3>{item.price} so'm</h3>
              <h4>{Math.round((item.price * 1.44) / 12)} so'm/oyiga</h4>
            </div>
            <div className="butto">
            <button>Savatga</button>
            </div>
              
              
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductWrapper;
