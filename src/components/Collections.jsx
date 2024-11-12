import React, { useEffect, useState, useContext } from 'react';
import { listProducts } from '../service/productService';
import Button from './Button';
import { CartContext } from '../context/cart';

const Collections = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, addToFavorites } = useContext(CartContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  function getAllProducts() {
    listProducts().then((response) => {
      setProducts(response.data);
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <div className="container mt-2">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img 
                height={"250px"}
                src={product.imageUrl} 
                className="card-img-top" 
                alt={product.productName} 
              />
              <div className="card-body text-center">
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

export default Collections;
