import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';


function ProductList() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div className='flex-row' style={{ flexWrap: 'wrap' }}>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))
            }

        </div>
    )
}

export default ProductList