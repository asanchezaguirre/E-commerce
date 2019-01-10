import React, { Component } from 'react';
import request from 'superagent';


class Category extends Component {
	constructor(){
		super();

		this.state= {
			category: []
		}
	}

componentDidMount(){
	this.showProduct(this.props.match.params.productCategory);
}

showCategory = (productCategory) => {
	var API = `https://mallory-furniture-admin.now.sh/api/v1/products?category=${productCategory}`;

	request
   .get(API)
   .then(res => {
      var categoryAll = res.body;
      	this.setState({category: categoryAll})

   });
}
  render() {
    return (
      <div>
      	<div>
      		<img ></img>
      	</div>
      		<div></div>
      		<p></p>
      		<hr/>
      		<div>
      			<div></div>
      			<div></div>
      			<div></div>
      			<div></div>
      		</div>
      	<div>
      	</div>
      </div>
    );
  }
}

export default Category;

