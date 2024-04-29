import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addOne } from '../API/requests';
import { endpoints } from '../API/constans.js';
import Products from '../classes/products';

const AddProduct = ({ products, setProducts }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [isDiscount, setIsDiscount] = useState(false);
    const [nameError, setNameError] = useState("");
    const [priceError, setPriceError] = useState("");

    const addProduct = (e) => {
        e.preventDefault();
        
        let isValid = true;

        if (name.trim() === "") {
            setNameError("Name is required");
            isValid = false;
        } else {
            setNameError("");
        }

        if (price.trim() === "") {
            setPriceError("Price is required");
            isValid = false;
        } else {
            setPriceError("");
        }

        if (isValid) {
            const newProduct = new Products(name, price, isDiscount);
            addOne(endpoints.products, newProduct);
            setProducts([...products, newProduct]);
            setName("");
            setPrice("");
            setIsDiscount(false);
        }
    };

    return (
        <>
            <form className='d-flex flex-column py-3' onSubmit={addProduct}>
                <input type="text" placeholder='name' className='form-control w-80' value={name} onChange={(e) => { setName(e.target.value) }} />
                {nameError && <span className='text-danger'>{nameError}</span>}
                <input type="number" placeholder='price' className='form-control w-80 mt-3' value={price} onChange={(e) => { setPrice(e.target.value) }} />
                {priceError && <span className='text-danger'>{priceError}</span>}
                <div className="d-flex my-3">
                    <input type="checkbox" id='isDiscount' checked={isDiscount} onChange={(e) => { setIsDiscount(e.target.checked) }}  />
                    <label htmlFor="isDiscount"> is discount</label>
                </div>
                <button type='submit' className='btn btn-primary'>Add</button>
            </form>
        </>
    );
}



AddProduct.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired, 
    isDiscount: PropTypes.bool.isRequired,
    setName: PropTypes.func.isRequired,
    setPrice: PropTypes.func.isRequired,
    setIsDiscount: PropTypes.func.isRequired
};

export default AddProduct;
