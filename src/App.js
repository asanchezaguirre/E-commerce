import React, { Component } from 'react';
import Nav from './components/Nav';
import AllProducts from './components/AllProducts';
import Terms from './components/Terms';
import Footer from './components/Footer';
import About from './components/About';
import AllProductsLink from './components/AllProductsLink';
import Product from './components/Product';
import Category from './components/Category';
import Cart from './components/Cart';
import './App.css';

import { Route, Switch } from "react-router-dom";


class App extends Component {
  constructor(){
    super();
    this.state={
      showCart: true,
      cartAdd: []
    }
  }

  displayCart = () => this.setState({showCart: !this.state.showCart})

  appendCart = (product) => this.setState({cartAdd: this.state.cartAdd.concat(product)})

  deleteCart = (item) => {
    var newAppendCart = this.state.cartAdd.filter(cartOne =>{
      return cartOne !== item;
    })
    this.setState({
      cartAdd: [...newAppendCart]
    })
  }


  render() {
    return (
      <div className="app">
        <Nav displayCart = {this.displayCart}/>
        <Switch>
       
        	<Route exact path='/' component={AllProducts} />
        	<Route exact path='/about' component={About} />
        	<Route exact path='/terms' component={Terms} />
        	<Route exact path='/all-products' component={AllProductsLink} />
        	<Route path= '/product/:productId' render={ (props) => <Product {...props} appendCart={this.appendCart} />  }/>
        	<Route path='/category/:categoryType' component={ Category } />
        </Switch>
        <Cart
          displayCart = {this.displayCart}
          showCart = {this.state.showCart}
          cartAdd = {this.state.cartAdd}
          deleteCart = {this.deleteCart}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
