import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//tools
import shoppingBag from '../../tools/shoppingBag.png';

//styles
import styles from './Navbar.module.css';

const Navbar = () => {
    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.navbar}>
            <Link to='/'>Products</Link>
            <Link to='/cart' className={styles.navbarImage}>
                <img src={shoppingBag} alt="shopping bag" />
                <span className={styles.itemsCounter}>{state.itemsCounter ===0 ? 0 : state.itemsCounter}</span>
            </Link>
        </div>
    );
};

export default Navbar;