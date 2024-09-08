import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateProduct } from '../redux/ProductReducer'



function UpdateProduct() {

  const products = useSelector((state) => 
    state.products)

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const existingProduct = products.find((product) => product.id == id)

  const [name, setName] = useState(existingProduct ? existingProduct.name : '')
  const [price, setPrice] = useState(existingProduct ? existingProduct.price : '')
  const [quantity, setQuantity] = useState(existingProduct ? existingProduct.quantity : '')
  const [amount, setAmount] = useState(existingProduct ? existingProduct.amount  : '')

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateProduct(
      {
        id:id,
        name:name,
        price,price,
        quantity:quantity,
        amount:amount
      }
    ))

    navigate('/')
  }

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form onSubmit={ handleUpdate }>
      <h2>Update Product</h2>
        <div className="mb-2">
            <label htmlFor="">Product Name</label>
            <input onChange={e => setName(e.target.value)}  type="text"
            value={name} placeholder='Enter Product Name' className='form-control' />
        </div>

        <div className="mb-2">
            <label htmlFor="">Price</label>
            <input onChange={e => setPrice(e.target.value)}  type="text" 
            value={price}
            placeholder='Enter Price' className='form-control' />
        </div>

        <div className="mb-2">
            <label htmlFor="">Quantity</label>
            <input onChange={e => setQuantity(e.target.value)} value={quantity}  type="number" placeholder='Enter Quantity' className='form-control' />
        </div>

        <div className="mb-2">
            <label htmlFor="">Amount</label>
            <input onChange={e => setAmount(e.target.value)} value={amount}  type="text" placeholder='Enter Amount' className='form-control' />
        </div>

        <button className="btn btn-success">
            Submit
        </button>
      </form>
    </div>
</div>
  )
}

export default UpdateProduct
