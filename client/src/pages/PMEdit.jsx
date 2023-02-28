import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PMForm from '../components/PMForm'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const PMEdit = () => {
    const navigate =useNavigate();

    const initialValues = {
        Product: '',
        Description: '',
        Price: '0',
    }

    const { id } = useParams();
    const [product, setProduct] = useState(initialValues)

    useEffect(() => {

        const getData = async () => {
            const products = await axios.get(`http://localhost:8000/api/pmlist/${id}`);
            setProduct(products.data)
        }

        getData();

    }, [id])

    const updateProduct = async (values, actions) => {
        try {
            const resultPM = await axios.put(`http://localhost:8000/api/pmlist/${id}`, values)
            console.log(resultPM)
            if(resultPM.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'Genial',
                    text: `Se ha actualizado ${resultPM.data.Product} correctamente :)`
                });

                navigate('/pmlist');

            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Algo salio mal',
                text: `Error:${error?.response?.data?.message || error.message}`,
            })
        }
    }

    return (
        <>
            <hr />
            <h3>Edit Product</h3>
            <div className='row'>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <PMForm initialValues={product}
                    botonTexto={"Update"}
                    onSubmit={updateProduct}
                    />
                </div>
            </div>
        </>
    )
}

export default PMEdit