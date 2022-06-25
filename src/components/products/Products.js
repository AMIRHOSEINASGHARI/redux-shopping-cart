import React from 'react';

const Products = (props) => {
    const {id , title , image , price} = props.productData;
    return (
        <div>
            <img src={image} alt="product" />
            <h1>{title}</h1>
            <h4>{price} $</h4>
            <button>Add to cart</button>
        </div>
    );
};

export default Products;