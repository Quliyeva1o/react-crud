import React, { useEffect } from 'react';
import { endpoints } from '../API/constans';
import { getAll } from '../API/requests';
import DeleteProduct from './DeleteProduct';


const ProductList = ({ products, setProducts }) => {
    const getProducts = () => {
        getAll(endpoints.products).then((res) => {
            setProducts(res.data);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {products.map((product, index) => (
                <ul key={index} >
                    <li className={product.isDiscount ? 'text-success' : 'text-danger'}>
                        name: {product.name}, price: {product.price}
                        <DeleteProduct product={product} setProducts={setProducts} />
                    </li>
                </ul >
            ))}
        </>
    );
};

export default ProductList;
