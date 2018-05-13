import React, { Component } from 'react';

import ListProducts from './product/product_container';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Footer from './layout/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<main id="main" className="main">
      		<div className="main__grid">
      			<section className="main__grid-row">
      				<Sidebar />
        			<ListProducts />
        		</section>
        	</div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
