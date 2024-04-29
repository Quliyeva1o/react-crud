import React, { useState } from 'react'
import Product from './Product'
import Logout from './Logout'
import Welcome from './Welcome'

const Login = ({ isLogged, setIsLogged }) => {
    return (
        <>{isLogged ?
            <div className='container'>
                <Welcome />
                <Logout setIsLogged={setIsLogged} />
                <Product />
            </div>

            : <div className='container my-5'><button className='btn btn-success '
                onClick={() => { setIsLogged(true) }}>login</button>
                <h1>you should login to see products</h1>
            </div>}
        </>
    )
}

export default Login
