import React from 'react';
import { checkout, clear } from '../../redux/cart/cartActions';
import {Link} from 'react-router-dom';
import CartProduct from './CartProduct';
import { useDispatch , useSelector } from 'react-redux';

//styles
import styles from './Cart.module.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cartState)

    return (
        <div className={styles.cartContainer}>
            <div className={styles.topSection}>
                {
                    cartState.itemsCounter >0 &&
                    <div className={styles.cartPayments}>
                        <div>
                            <p><span>Total items:</span> {cartState.itemsCounter}</p>
                            <p><span>Total payments:</span> {cartState.totalPrice} $</p>
                        </div>
                        <div>
                            <button onClick={() => dispatch(clear())}>Clear</button>
                            <button onClick={() => dispatch(checkout())}>Checkout</button>
                        </div>
                    </div>
                }

                {
                    cartState.itemsCounter ===0 && cartState.checkout &&
                    <div>
                        <h1>Checked out Successfully</h1>
                        <Link to='/'>Buy more!</Link>
                    </div>
                }

                {
                    cartState.itemsCounter ===0 && !cartState.checkout &&
                    <div>
                        <h1>Cart is empty</h1>
                        <Link to='/'>Back to Shop</Link>
                    </div>
                }
            </div>
            <div className={styles.shopCartProduct}>
                {
                    cartState.selectedItems.map(item => <CartProduct key={item.id} data={item} />)
                }
            </div>
        </div>
    );
};

export default Cart;