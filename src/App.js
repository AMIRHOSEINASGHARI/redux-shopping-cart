import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/product details/ProductDetails';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetail/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Provider>
  );
};

export default App;