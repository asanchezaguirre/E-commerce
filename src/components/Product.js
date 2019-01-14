import React, { Component } from 'react';
import request from 'superagent';

class Product extends Component {
	constructor(props){
		super(props);

		this.state= {
			product: []
		}
	}

componentDidMount(){
	this.showProduct(this.props.match.params.productId);
}

showProduct = (productId) => {
	var API = `https://mallory-furniture-admin.now.sh/api/v1/products/${productId}`;

	request
   .get(API)
   .then(res => {
      var productOnly = res.body;
      	this.setState({product: productOnly})

   });
}
  render() {
    return (
      <div className= "container__data">
      	<div className= "container__data-img">
      		<img src={this.state.product.imageLink}></img>
      	</div>
          <div className= "container__data-data">
        		<div className= "container__data-datat">{this.state.product.item}</div>
        		<p>${this.state.product.price}</p>
        		<hr/>
        		<div className="container__data-charac">
        			<div className="container__data-charact">Condition<div>{this.state.product.condition}</div></div>
        			
        			<div className="container__data-charact">Measurements<div>W:{this.state.product.width} L:{this.state.product.length} H:{this.state.product.height}</div></div>
        			
        			<div><button onClick={ () => this.props.appendCart(this.state.product)} >Add to Cart</button></div>
        		</div>
      	  </div>
      </div>
    );
  }
}

export default Product;


