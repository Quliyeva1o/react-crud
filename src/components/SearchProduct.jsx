import React from 'react'

const SearchProduct = ({ products, setFilteredProducts }) => {
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
        );
        setFilteredProducts(filteredProducts);
    };


    return (
        <>
            <input
                type="text"
                name="search"
                className='form-control my-4 '
                placeholder='search by name'
                onChange={handleSearch}
            />
        </>
    )
}

export default SearchProduct
