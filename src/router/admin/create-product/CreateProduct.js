import React, { useState, useRef } from 'react'
import '../Admin.css'



function CreateProduct() {
  const [title, setTitle] = useState("")
  const price = useRef()
  const url = useRef()

  const handleSubmit=e=>{
    e.preventDefault()
    let newProduct={
      title,
      price:+price.current.value,
      url: url.current.value
    }
    console.log(newProduct);
  }

  return (
    <div className='create_product' >
      <form onSubmit={handleSubmit} action="">
      <h2>CreateProduct</h2>
        <input value={title} onChange={e=> setTitle(e.target.value)} required type="text" placeholder='title' />
        <input ref={price} required type="number" placeholder='price' />
        <input ref={url} required type="text" placeholder='url' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateProduct
