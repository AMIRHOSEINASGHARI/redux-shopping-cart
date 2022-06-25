import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//tools
import shoppingBag from '../../tools/shoppingBag.png';

const Navbar = () => {
    const state = useSelector(state => state.cartState);

    return (
        <div>
            <Link to='/'>Products</Link>
            <Link to='/cart'>
                <img src={shoppingBag} alt="shopping bag" />
                <span>{state.itemsCounter ===0 ? 0 : state.itemsCounter}</span>
            </Link>
        </div>
    );
};

export default Navbar;