import React from 'react'
import './SiteBar.css'
import {TbCreativeCommonsZero,TbAirConditioning,TbShirtFilled,TbShoe,TbAccessibleOffFilled} from 'react-icons/tb'
import {BsHeadphones,BsHeartHalf,BsBookFill} from 'react-icons/bs'
import {GiLipstick} from 'react-icons/gi'
import {AiFillHome,AiFillCar,AiFillApple} from 'react-icons/ai'
import {BiGitBranch} from 'react-icons/bi'
import {FaHorse,FaBasketballBall}  from 'react-icons/fa'
import {MdOutlineColorLens}  from 'react-icons/md'





const  DATA= [
  {
    title: "Halol nasiya",
    img:  <TbCreativeCommonsZero/>
  },
  {
    title: "Elektronika",
    img:  <BsHeadphones/>
  },
  {
    title: "Maishiy Texnika",
    img:  <TbAirConditioning/>
  },
  {
    title: "Kiyim",
    img:  <TbShirtFilled/>
  },
  {
    title: "Poyovzallar",
    img:  <TbShoe/>
  },
  {
    title: "Acsesuarlar",
    img:  <TbAccessibleOffFilled/>
  },
  {
    title: "Go'zallik",
    img:  <GiLipstick/>
  },
  {
    title: "Salomatlik",
    img:  <BsHeartHalf/>
  },
  {
    title: "Uy Rozgor Buyumlari",
    img:  <AiFillHome/>
  },
  {
    title: "Qurilish va Tamirlash",
    img:  <BiGitBranch/>
  },
  {
    title: "Autotovarlar",
    img:  <AiFillCar/>
  },
  {
    title: "Bolalar tovarlari",
    img:  <FaHorse/>
  },
  {
    title: "Hobbi ijod",
    img:  <MdOutlineColorLens/>
  },
  {
    title: "Sport va hordiq",
    img:  <FaBasketballBall/>
  },
  {
    title: "Oziq-Ovqat maxsulotlari",
    img:  <AiFillApple/>
  },
  {
    title: "kitoblar",
    img:  <BsBookFill/>
  }
]


function SiteBar({show, setShow}) {
  return (
    <>
    {
        show?
        <div onClick={()=> setShow(false)}className="sitebar__shadow"></div>
         :<></>
    }
      <div className={`sitebar ${show ? "show" : ""}`}>
 
     <div className="site__bar">
     {
      DATA?.map((item, inx)=>( <div key={inx} className="site_collaction">
      <li className="item" >
      <p>{item.img}</p>
      <h3>{item.title}</h3>
      </li>
      </div> ))}  
     </div>
      


      </div>

    </>
  )
}

export default SiteBar
