import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import PMForm from '../components/PMForm'

const PMAdd = () => {
    const navigate =useNavigate();

    const initialValues = {
        Product: '',
        Description: '',
        Price: '0',
    }

    const createProduct = async (values, actions) => {
        try {
            const resultPM = await axios.post(`http://localhost:8000/api/newpm`, values)
            console.log(resultPM)
            if(resultPM.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'Genial',
                    text: `Se ha agregado ${resultPM.data.Product} correctamente :)`
                });
                navigate('/pmlist');
                actions.resetForm(initialValues);
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salio mal',
                    text: `Error:${resultPM.data.message}`,
                })
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
            <div className='row'>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <PMForm
                    initialValues={initialValues}
                    botonTexto={"Add new"}
                    onSubmit={createProduct}
                    />
                </div>
            </div>
        </>
    )
}

export default PMAdd