import React from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const PMErrores = Yup.object().shape({
    Product: Yup.string()
        .min(4, 'Too short!.')
        .max(20, 'Too Long!.')
        .required('Required!'),
    Description: Yup.string()
        .min(4, 'Too short!.')
        .max(30, 'Too Long!.')
        .required('Required!.'),
    Price: Yup.number()
        .integer('Debe ser un numero entero')
        .positive('No puede  ser un numero negativo')
        .required('Required!.'),
});

const PMForm = ({initialValues, botonTexto, onSubmit}) => {


    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema = { PMErrores }
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <h3>Product</h3>
                    <Field name="Product" className="form-control" placeholder="Insert your product" />
                    {touched.Product  && errors.Product && <div className='ms-3 mt-1 text-danger'>{errors.Product}</div>}
                    <h3>Description</h3>
                    <Field name="Description" className="form-control mt-2" placeholder="Description" />
                    {touched.Description  && errors.Description && <div className='ms-3 mt-1 text-danger'>{errors.Description}</div>}
                    <h3>Price</h3>
                    <Field name="Price" type="Number" className="form-control mt-2" placeholder="Price in gs." />
                    {touched.Price  && errors.Price && <div className='ms-3 mt-1 text-danger'>{errors.Price}</div>}
                    <button type="submit" className="btn btn-success mt-2" disabled={!(isValid && dirty)}>{botonTexto} product</button>
                </Form>
            )}
        </Formik>
    )
}

export default PMForm