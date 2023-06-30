import React, { useState, useRef } from 'react'
import '../Admin.css'
import { db } from '../../../server'
import { collection, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'



function CreateProduct() {
  const [title, setTitle] = useState("")
  const price = useRef()
  const url = useRef()
  const [loading, setLoading] =useState(false)
  const productRef = collection(db, "products")



  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    let newProduct = {
      title,
      price: +price.current.value,
      url: url.current.value
    }
  await addDoc(productRef, newProduct)
  .then(res => {console.log(res)
  setTitle("")
  price.current.value=""
  url.current.value=""
  toast.success("Muffaqiyatli yakunlandi")
  })
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))


  }

  return (
    <div className='create_product' >
      <form onSubmit={handleSubmit} action="">
        <h2>CreateProduct</h2>
        <input value={title} onChange={e => setTitle(e.target.value)} required type="text" placeholder='title' />
        <input ref={price} required type="number" placeholder='price' />
        <input ref={url} required type="text" placeholder='url' />
        <button disabled={loading} >{loading ? "loading..." : "submit"}</button>
      </form>
    </div>
  )
}

export default CreateProduct
