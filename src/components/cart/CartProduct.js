import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, removeItem } from '../../redux/cart/cartActions';

//functions
import {shortTheTitle} from '../../services/functions';

//tools
import trashCan from '../../tools/trash-can.png';

//styles
import styles from './CartProduct.module.css';

const CartProduct = (props) => {
    const {title , image , price , quantity} = props.data;
    const dispatch = useDispatch();
    return (
        <div className={styles.shopCartContainer}>
            <img src={image} alt="product" className={styles.shopCartImage} />
            <div className={styles.shopCartTitle}>
                <h1>{shortTheTitle(title)}</h1>
                <p>{price} $</p>
            </div>
            <div className={styles.productQuantity}>
                <span className={styles.qCounter}>{quantity}</span>
            </div>
            <div className={styles.buttonsSectios}>
                {
                    quantity >1 ?
                    <button onClick={() => dispatch(decrease(props.data))}>-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))} className={styles.shopCartTrashCan}><img src={trashCan} alt='remove' /></button>
                }
                <button onClick={() => dispatch({type: 'INCREASE' , payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default CartProduct;