import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams , Link} from 'react-router-dom';

//tools
import spinGif from '../../tools/Spin-gif.gif';

const ProductDetails = () => {
    const params = useParams();
    const [product , setProduct] = useState([]);

    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => setProduct(response.data))
    }, [])
    return (
        <div>
            {
                product.length ===0 ?
                <div><img src={spinGif} alt='Loading ...' /></div> :
                 <div>
                    <img src={product.image} alt="product image" />
                    <div>
                        <h1>{product.title}</h1>
                        <h3>{product.category}</h3>
                        <p>{product.description}</p>
                        <h2>Price: {product.price} $</h2>
                        <Link to='/'>Back to shop</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;