import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetail.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { image, price, title, description } = selectedProduct;

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
    }

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
                <p>{description}</p>
                <h1 className='price'>{price} ₺</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} className='icon' />
                    <span style={{ fontSize: '35px' }}>{count}</span>
                    <CiCircleMinus onClick={decrement} className='icon' />
                </div>
                <div>
                    <button onClick={addBasket} className='detail-button'>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails