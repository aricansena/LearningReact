import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, price, image, title, description } = product;
    const navigate = useNavigate();
    return (
        <div className='card'>
            <img className='image' src={image}></img>
            <div>
                <h4 className='title'>{title}</h4>
                <h3 className='price'>{price}</h3>
            </div>
            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detay</button>
            </div>
        </div>
    )
}

export default Product