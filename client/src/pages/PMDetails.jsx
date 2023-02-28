import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PMDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {

        const getData = async () => {
            const products = await axios.get(`http://localhost:8000/api/pmlist/${id}`);
            setProduct(products.data)
        }

        getData();

    }, [id])

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2>Details of Product</h2>
                </div>
                <div className="card-body">
                    <h5 className="card-title"><h2>{product.Product}</h2></h5>
                    <p className="card-text mt-3"><strong><span>Description: </span>{product.Description}</strong></p>
                    <p className="card-text mt-2"><strong><span>Price: </span>{product.Price}</strong></p>
                    <Link to="/pmlist" className="btn btn-primary">Back to list</Link>
                </div>
            </div>
        </>
    )
}

export default PMDetails