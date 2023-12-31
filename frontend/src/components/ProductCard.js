import React from 'react';
import "../styles/ProductCard.css";

const ProductCard = ({productImg, title, imgUrl, price}) => {
    return (
        <div className="product-card">
            <section>
            <img src={productImg} 
            alt=''/></section>
            <p>{title}</p>
            <p>{price}</p>
            <section>
            <button>Add to Cart</button>
            <button>Buy Now</button>
            </section>
        </div>
    );
};

export default ProductCard