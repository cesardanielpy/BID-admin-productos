import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const PMList = () => {

  const [products, setProducts] = useState([])
useEffect(() => {
  
  const getData = async () => {
    const products = await axios.get(`http://localhost:8000/api/pmlist`);
    setProducts(products.data)
  }

getData();

}, [])

const deleteProduct = async (productID) => {
  try {
    await axios.delete(`http://localhost:8000/api/pmlist/${productID}`);

    setProducts(products.filter( (product) => product._id !== productID));
    
  } catch (error) {
    console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Algo salio mal',
                text: `Error:${error?.response?.data?.message || error.message}`,
            })
  }

}

const deleteConfirm = (productID) => {
  Swal.fire({
    title: 'Estas seguro de eliminar?',
    text: "Esta operacion no se puede revertir",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, estoy seguro de eliminar este producto'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProduct(productID);
    }
  })
}

  return (
    <>
    <hr/>
<table className='table table-striped table-hover table-bordered'>
  <thead>
    <tr>
      <th>Product</th>
      <th>Description</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product,index) => <tr key={index}>
      <td>{ product.Product }</td>
      <td>{ product.Description }</td>
      <td>{ product.Price}</td>
      <td>
        <Link className='btn btn-success' to={`/pmlist/${product._id}`}>Details</Link>
        <Link className='btn btn-warning ms-3' to={`/pmlist/${product._id}/edit`}>Edit</Link>
        <button className='btn btn-danger ms-3' onClick={ () => {deleteConfirm(product._id)}}>Delete</button>
      </td>
    </tr>)}
  </tbody>
</table>
    <Link to={'/'} className='btn btn-success mt-5'>Add Product</Link>
    </>
  )
}

export default PMList