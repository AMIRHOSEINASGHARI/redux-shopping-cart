import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Provider>
  );
};

export default App;