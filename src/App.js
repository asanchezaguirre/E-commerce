import React, { Component } from 'react';
import Nav from './components/Nav';
import AllProducts from './components/AllProducts';
import Terms from './components/Terms';
import Footer from './components/Footer';
import About from './components/About';
import AllProductsLink from './components/AllProductsLink';
import Product from './components/Product';
import Category from './components/Category';
import './App.css';

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Switch>
        	<Route exact path='/' component={AllProducts} />
        	<Route exact path='/about' component={About} />
        	<Route exact path='/terms' component={Terms} />
        	<Route exact path='/all-products' component={AllProductsLink} />
        	<Route path='/product/:productId' component={ Product } />
        	<Route path='./category/:productCategory' component={ Category } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
