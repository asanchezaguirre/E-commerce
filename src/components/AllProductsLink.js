import React, { Component } from 'react';
import request from 'superagent'; 
import { Link } from 'react-router-dom';


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

 allProducts = (e) => {
    request
    .get('https://mallory-furniture-admin.now.sh/api/v1/products')
    .then((res)=>{
    	var productsAll = res.body;
      this.setState({ productsAllLink: productsAll
      })
    })
  }

  sale = (e) => {
    request
    .get('https://mallory-furniture-admin.now.sh/api/v1/products')
    .then((res)=>{

    var onlyOnsale = this.state.productsAllLink.filter((product) => {
      return product.onSale === true
    })
    this.setState({
      productsAllLink: onlyOnsale
      })
    })
  }



  render() {
    return (
      <div className="subtitulos">
      	<h2>All Products</h2>
      	<p>All available listings</p>
      	<div className="all__container__buttons">
      		<button onClick={this.allProducts}>All Items</button>
      		<button onClick={this.sale}>On sale</button>
      	</div>
      	<div className="all__container__count">
      		<div className="all__container__count-1">{this.state.productsAllLink.length}</div>
      		<div className="all__container__count-2"><p>items showing</p></div>
      	</div>
      	<div className="container__products">
	  		{
	  			this.state.productsAllLink.map((product)=>{
	  		return 	<div className="container__details">
		  				<Link className="underline" to={`/product/${product._id}`}>
			  				<div>
					  			<img src={product.imageLink}/>
					  		</div>
					  		<div className="product__details">
						  		<h4>{product.item}</h4>
						  		<p>{product.price}</p>
						  	</div>
					  	</Link>
				  	</div>
		  	})}
	  	</div>



      </div>
    );
  }
}

export default AllProductsLink;