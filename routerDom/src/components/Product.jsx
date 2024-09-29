import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, name, price } = product;
    const navigate = useNavigate();
    return (
        <div className='product'>
            <h1>Ürün Detayı</h1>
            <h2>İsim: {name}</h2>
            <h2>Fiyat: {price}</h2>
            <button onClick={() => navigate("/product-details/" + id)}>Detay</button>
        </div>
    )
}

export default Product