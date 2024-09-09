import React, { useContext, useState } from 'react';
import "./style.scss";
import { productData } from "../../data/ProductData";
import { CartContext } from '../../context/Context';

function Products() {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All' 
    ? productData 
    : productData.filter(item => item.category === selectedCategory.toLowerCase());

  return (
    <>
      <div className="container">
        <div className="products">
          <h1 className='products__title'>Latest Products</h1>
          <hr />
          <div className="btns">
            <button className="btn" onClick={() => handleCategoryClick('All')}>All</button>
            <button className="btn" onClick={() => handleCategoryClick('men')}>Men's Clothing</button>
            <button className="btn" onClick={() => handleCategoryClick('women')}>Women's Clothing</button>
            <button className="btn" onClick={() => handleCategoryClick('jewelery')}>Jewelery</button>
            <button className="btn" onClick={() => handleCategoryClick('electronics')}>Electronics</button>
          </div>
          <div className="wrapper">
            {filteredProducts.map((item, id) => (
              <div key={id} className='product'>
                <div className="product__img">
                  <img className='product__img-image' src={item.img} alt={item.title} />
                </div>
                <div className="product__text">
                  <h3 className='product__text-title'>{item.title}</h3>
                  <p className="product__text-descr">{item.descr}</p>
                  <hr />
                  <p className="product-price">{item.price} $</p>
                  <hr />
                </div>
                <div className="product__buttons">
                  <button className="product__buttons-btn">Buy now</button>
                  <button 
                    className="product__buttons-btn" 
                    onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
