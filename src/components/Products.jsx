import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../redux/ProductReducer'




function Products() {
    
    const dispatch = useDispatch()
    const products = useSelector((state) => 
        state.products
    )
    //console.log(products);

    const handleDelete = (id) => {
        //console.log(id);
        dispatch(deleteProduct({id}));
    }
    
  return (
    
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center" >
        
    <div className=" bg-white rounded p-4">
    <h3 className='text-center'>Product Management Dashboard</h3>
        <Link to={"/create"} className="btn btn-success">Add +</Link>
        <div className="table table-striped ">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                products.map((product, index) => (
                    <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.amount}</td>
                    <td>
                        <Link to={`/update/${product.id}`} className="btn btn-info">Update</Link>
                        <button onClick={ () => {handleDelete(product.id)}}  className="btn btn-danger ms-2">Delete</button>
                    </td>
                  </tr>      

                ))
               }
               
            </tbody>
        </div>
    </div>

 </div>
  )
}

export default Products
