import React, { Component } from 'react';
import request from 'superagent';

import { Link } from 'react-router-dom';


class AllProducts extends Component {
	constructor(){
	super()
		this.state = {
		productsAll: []
	}
}

componentDidMount(){
	request
   .get('https://mallory-furniture-admin.now.sh/api/v1/products')
   .then(res => {
      var products = res.body;
      	this.setState({productsAll: products.slice(0, 6)})

   });
}

  render() {
    return (
	  <div>
	  	<div>
	  		<div className="image__landing">
	  			<div className= "text__front">
	  				<h1>Mallory Furniture</h1>
	  				<h2>Your furniture is old.</h2>
	  				<h2>Ours is older.</h2>
	  			</div>
	  		</div>
	  	</div>
	  	<div className="subtitulos">
		  	<h2>Featured Products</h2>
		  	<p>Check out some of our favorite listings</p>
	  	</div>
	  	<div className="container__products">
	  		{
	  			this.state.productsAll.map((product)=>{
	  		return 	<div className="container__details">
		  				<Link className="underline" to={`/product/${product._id}`}>
			  				<div>
					  			<img src={product.imageLink} alt="Logo de Mallory Furniture"></img>
					  		</div>
					  		<div className="product__details">
						  		<h4>{product.item}</h4>
						  		<p>${product.price}</p>
						  	</div>
					  	</Link>
				  	</div>
		  	})}
	  	</div>
	  	<div className="container__button__all">
	  		<Link className="underline" to="/all-products">
	  			<button className="button__all">All Products</button>
	  		</Link>
	  	</div>
	  	<div className="subtitulos">
	  		<h2>Browse by Categories</h2>
	  		<p>Explore by furniture type.</p>
	  	</div>
	  	<div className="buttons__landing">
	  		<Link to='/category/seating'><button>Seating</button></Link>
	  		<Link to='/category/tables'><button>Tables</button></Link>
	  		<Link to='/category/desks'><button>Desks</button></Link>
	  		<Link to='/category/bedroom'><button>Bedroom</button></Link>
	  		<Link to='/category/storage'><button>Storage</button></Link>
	  		<Link to='/category/miscellaneous'><button>Misc</button></Link>
	  	</div>

      </div>
    );
  }
}

export default AllProducts;

