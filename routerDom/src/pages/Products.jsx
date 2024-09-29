import React from 'react'
import Product from '../components/Product'

const products = [
    {
        id: "1",
        name: "Bilgisayar",
        price: "10.000",
    },
    {
        id: "2",
        name: "Telelefon",
        price: "12.000",
    }
]

function Products() {
    return (
        <div>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Products