import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import fetchProducts from '../../redux/products/productsActions';

//components
import Products from '../products/Products';

//tools
import spinGif from '../../tools/Spin-gif.gif';

const Home = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(()=> {
        !productsState.products.length && dispatch(fetchProducts());
    }, [])

    return (
        <div>
            {
                !productsState.products.length ?
                <div><img src={spinGif} alt='Loading ...' /></div> :
                productsState.products.map(product => <Products key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Home;