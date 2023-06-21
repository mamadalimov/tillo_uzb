import React from 'react'
import './Admin.css'
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'

function Admin() {
  return (
    <div className='admin' >
      <div className="admin__sidebar"></div>
      <div className="admin__content"></div>
    </div>
  )
}

export default Admin