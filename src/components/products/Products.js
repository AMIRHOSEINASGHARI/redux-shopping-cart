import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { addItem, increase } from '../../redux/cart/cartActions';

//functions
import { isInCart, qCounter, shortTheTitle } from '../../services/functions';

//tools
import trashCan from '../../tools/trash-can.png';

//styles
import styles from './Products.module.css';

const Products = (props) => {
    const {id , title , image , price} = props.productData;
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.productContainer}>
            <img src={image} alt="product" />
            <h1>{shortTheTitle(title)}</h1>
            <span className={qCounter(state , props.productData.id) >0 ? styles.qCounterNoneZero : styles.qCounterZero}>{qCounter(state , props.productData.id)}</span>
            <h4>{price} $</h4>
            <div>
                <Link to={`/productdetail/${id}`}>Details</Link>
                {
                    qCounter(state , props.productData.id) > 1 && <button onClick={() => dispatch({type: 'DECREASE' , payload: props.productData})}>-</button>
                }
                {
                    qCounter(state , props.productData.id) === 1 && <button className={styles.trashCan} onClick={() => dispatch({type: 'REMOVE_ITEM' , payload: props.productData})}><img src={trashCan} alt='remove' /></button>
                }
                {
                    isInCart(state , props.productData.id) ?
                    <button onClick={() => dispatch(increase(props.productData))}>+</button> :
                    <button onClick={() => dispatch(addItem(props.productData))}>Add to Cart</button>
                }
            </div>
        </div>
    );
};

export default Products;