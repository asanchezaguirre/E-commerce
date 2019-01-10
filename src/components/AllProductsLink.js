import React, { Component } from 'react';
import request from 'superagent';


class AllProductsLink extends Component {
constructor(){
	super()
		this.state = {
		productsAllLink: []
	}
}

componentDidMount(){
	request
	.get('https://mallory-furniture-admin.now.sh/api/v1/products')
	.then(res =>{
		var productAll = res.body;
		this.setState({productsAllLink: productAll})
	});
}


  render() {
    return (
      <div className="all__container">
      	<h2>All Products</h2>
      	<p>All available listings</p>
      	<div className="all__container__buttons">
      		<button>All Items</button>
      		<button>On sale</button>
      	</div>
      	<div className="all__container__count">
      		<div className="all__container__count-1">61</div>
      		<div className="all__container__count-2">items showing</div>
      	</div>
      	<div className="all__container__products">
	  		{
	  			this.state.productsAllLink.map((product)=>{
	  		return 	<div className="all__container__details">
		  				<div>
				  			<img src={product.imageLink}/>
				  		</div>
				  		<div className="all__product__details">
					  		<p>{product.item}</p>
					  		<p>{product.price}</p>
					  	</div>
				  	</div>
		  	})}
	  	</div>



      </div>
    );
  }
}

export default AllProductsLink;
