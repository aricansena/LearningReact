import React from 'react'
import { products } from '../data/products.json'
import { useParams } from 'react-router-dom'
import Product from '../components/Product';

function ProductDetails() {
    const { id } = useParams();
    return (
        <div>
            <h1>Üren Detayları</h1>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Product product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails