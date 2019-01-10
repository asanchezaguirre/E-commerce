import React, { Component } from 'react';
import request from 'superagent';

class Product extends Component {
	constructor(){
		super();

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
      <div>
      	<div>
      		<img src={this.state.product.imageLink}></img>
      	</div>
      		<div>{this.state.product.item}</div>
      		<p>${this.state.product.price}</p>
      		<hr/>
      		<div>
      			<div>Condition</div>
      			<div>{this.state.product.condition}</div>
      			<div>Measurements</div>
      			<div>W:{this.state.product.width} L:{this.state.product.length} H:{this.state.product.height}</div>
      			<div><button>Add to Cart</button></div>
      		</div>
      	<div>
      	</div>
      </div>
    );
  }
}

export default Product;


