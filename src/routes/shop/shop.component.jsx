import { useContext } from 'react'

import ProductCard from '../../components/Product-Card/product-card.component' 

import { ProductContext } from '../../contexts/product.context'

const Shop = () => {
    const { products } = useContext(ProductContext)
    return (
    <div>
         {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
    </div>
    )
}

export default Shop;