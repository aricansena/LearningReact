import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetail.css'

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { image, price, title, description } = selectedProduct;
    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }
    return (
        <div className='flex-row detail'>
            <div>
                <img className='product-detail-img' src={image} />
            </div>
            <div className='content'>
                <h2>{title}</h2>
                <h2>{price}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductDetails