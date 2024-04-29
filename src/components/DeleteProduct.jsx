import React from 'react'
import { delOne } from '../API/requests';
import { endpoints } from '../API/constans';

const DeleteProduct = ({ product, setProducts }) => {
    return (
        <>
            <button className='btn btn-danger mx-3' onClick={
                async () => {
                    await delOne(endpoints.products, product.id); setProducts((products) => {
                        return products.filter((x) => x.id != product.id)
                    })
                }

            }
            >del</button>
        </>
    )
}

export default DeleteProduct
