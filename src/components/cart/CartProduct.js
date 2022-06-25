import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, removeItem } from '../../redux/cart/cartActions';

//functions
import {shortTheTitle} from '../../services/functions';

//tools
import trashCan from '../../tools/trash-can.png';

const CartProduct = (props) => {
    const {title , image , price , quantity} = props.data;
    const dispatch = useDispatch();
    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h1>{shortTheTitle(title)}</h1>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity >1 ?
                    <button onClick={() => dispatch(decrease(props.data))}>-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))}><img src={trashCan} alt='remove' /></button>
                }
                <button onClick={() => dispatch({type: 'INCREASE' , payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default CartProduct;