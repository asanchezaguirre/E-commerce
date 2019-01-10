import React, { Component } from 'react';
import request from 'superagent';

import { Link } from 'react-router-dom';

class Category extends Component {
	constructor(props){
		super(props);

		this.state= {
			categories: []
		};
	}

componentDidMount(){
	this.showProduct(this.props.match.params.categoryType);
}

showProduct = (categoryType) => {
	var API = `https://mallory-furniture-admin.now.sh/api/v1/products?category=${categoryType}`;

	request
   .get(API)
   .then(res => {
      var categories = res.body;
      	this.setState({categories: categories})

   });
}

componentDidUpdate(prevProps) {
  this.showProduct(prevProps.match.params.categoryType);
}

  render() {
  
    return (
      <div>

      	{
	  			this.state.categories.map((product, i)=>{
	  		return 	<div key={i} className="container__details">
		  				<Link to={`/product/${product._id}`}>
			  				<div>
					  			<img src={product.imageLink} alt="Logo de Mallory Furniture"></img>
					  		</div>
					  		<div className="product__details">
						  		<p>{product.item}</p>
						  		<p>{product.price}</p>
						  	</div>
					  	</Link>
				  	</div>
		  	})}
      </div>
    );
  }
}

export default Category;



