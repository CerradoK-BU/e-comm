import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsBySection } from '../service/productService';
import Button from './Button';
import { CartContext } from '../context/cart';

const Products = () => {
    const { section } = useParams();
    const [products, setProducts] = useState([]);
    const { addToCart, addToFavorites } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProductsBySection(section);
                const data = response.data;
                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    setProducts([data]);
                }
            } catch (error) {
                console.error('Error fetching the products:', error);
            }
        };

        fetchProducts();
    }, [section]);

    return (
        <div className="container mt-2">
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img 
                                height={"300px"}
                                src={product.imageUrl}  
                                className="card-img-top" 
                                alt={product.productName} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">
                                    Price: ₱{product.productPrice}<br />
                                    Category: {product.category}<br />
                                    In Stock: {product.stocks}
                                </p>
                                <Button onAddToCart={() => addToCart(product)} onAddToFavorites={() => addToFavorites(product)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
