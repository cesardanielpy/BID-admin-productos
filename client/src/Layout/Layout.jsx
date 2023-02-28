import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
    return (
        <>
        <NavBar/>
        <div className='container mt-5'>
        <h1>Product Manager</h1>
            <Outlet/>
        </div>
        </>
    )
}

export default Layout