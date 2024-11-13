import React, { useEffect, useState, useContext } from 'react';
import { listProducts } from '../service/productService';
import Button from './Button';
import { CartContext } from '../context/cart';

const ITEMS_PER_PAGE = 9;

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-2">
      <div className="row">
        {currentProducts.map(product => (
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
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Collections;
