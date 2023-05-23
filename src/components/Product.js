import React from 'react';

function Product({label, image, name, price}) {
    return (
        <article className="product">
            <span>{label}</span>
            <img
                src={image}
                alt={name}
            />
            <p className="product-name">{name}</p>
            <h4 className="product-price">{price}</h4>
        </article>
    );
}

export default Product;