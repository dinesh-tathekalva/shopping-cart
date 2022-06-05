import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('Err', err);
            })
        console.log(response);
        // dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="ui grid container">
            {products.map((product, key) => {
                return <ProductComponent key={product.id} title={product.title} />
            })}

        </div>
    )
}
export default ProductListing