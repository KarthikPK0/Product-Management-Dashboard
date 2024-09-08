import React, { useState } from 'react'
import { addProduct } from '../redux/ProductReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function AddProduct() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [amount, setAmount] = useState('')
  const products = useSelector((state) => state.products )
  //console.log(products);
  

 const handleSubmit = (e) => {
  e.preventDefault()  
  const newId = products.length + 1; // Assign new ID based on array length

       //console.log(name);
       //console.log(price);
       //console.log(quantity);
       //console.log(amount);
       dispatch(addProduct({ id:newId, name, price, quantity, amount}))
       navigate('/')
              
  }
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form onSubmit={ handleSubmit }>
      <h2>Add Product</h2>
        <div className="mb-2">
            <label htmlFor="">Product Name</label>
            <input onChange={e => setName(e.target.value)} type="text" placeholder='Enter Product Name' className='form-control' />
        </div>

        <div className="mb-2">
            <label htmlFor="">Price</label>
            <input onChange={e => setPrice(e.target.value) }  type="text" placeholder='Enter Price' className='form-control' />
        </div>

        <div className="mb-2">
            <label htmlFor="">Quantity</label>
            <input onChange={e => setQuantity(e.target.value)}  type="number" placeholder='Enter Quantity' className='form-control' />
        </div>

        <div className="mb-2">
            <label htmlFor="">Amount</label>
            <input onChange={e => setAmount(e.target.value)}  type="text" placeholder='Enter Amount' className='form-control' />
        </div>

        <button className="btn btn-success">
            Submit
        </button>
      </form>
    </div>
</div>
  )
}

export default AddProduct
