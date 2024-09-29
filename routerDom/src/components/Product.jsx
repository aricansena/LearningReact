import React from 'react'
import '../css/Product.css'

function Product({ product }) {
    const { id, name, price } = product;
    return (
        <div className='product'>
            <h1>Ürün Detayı</h1>
            <h2>İsim: {name}</h2>
            <h2>Fiyat: {price}</h2>
        </div>
    )
}

export default Product