import React, { Component } from 'react';

import ListProducts from './product/product_container';
import Header from './layout/header';
import Footer from './layout/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      	<Header />
        <ListProducts />
        <Footer />
      </div>
    );
  }
}

export default App;
