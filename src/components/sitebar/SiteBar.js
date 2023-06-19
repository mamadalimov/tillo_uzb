import React from 'react'
import './SiteBar.css'

function SiteBar({show, setShow}) {
  return (
    <>
    {
        show?
        <div onClick={()=> setShow(false)}className="sitebar__shadow"></div>
         :<></>
    }
      <div className={`sitebar ${show ? "show" : ""}`}></div>

    </>
  )
}

export default SiteBar
