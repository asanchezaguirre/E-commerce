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
	var {categoryType} = this.props.match.params;
	var API = `https://mallory-furniture-admin.now.sh/api/v1/products?category=${categoryType}`;

	request
   .get(API)
   .then(res => {
      var categories = res.body;
      	this.setState({categories: categories})

   });
}
componentDidUpdate(prevProps) {
    var {categoryType} = this.props.match.params;
    if(this.props.match.params !== prevProps.match.params){
      request
      .get(`https://mallory-furniture-admin.now.sh/api/v1/products?category=${categoryType}`)
        .then((res) => {
          this.setState({
          categories: res.body
        });
      })
    }
}

allItems = (e) => {
	var {categoryType}  = this.props.match.params;
    request
    .get(`https://mallory-furniture-admin.now.sh/api/v1/products?category=${categoryType}`)
    .then((res) =>{
    this.setState({
      categories: res.body
      })
    })
  }

  onSale = (e) => {
  	var {categoryType}  = this.props.match.params;
    request
    .get(`https://mallory-furniture-admin.now.sh/api/v1/products?category=${categoryType}`)
    .then((res) => {
    var showOnSale = this.state.categories.filter((item) =>{
      return item.onSale === true
      })
    this.setState({
      categories: showOnSale
      })
    });
  };



  render() {
  
    return (
      <div className="all__container">
      <h2>All Products</h2>
      	<p>All available listings</p>
      	<div className="all__container__buttons">
      		<button onClick={this.allItems}>All Items</button>
      		<button onClick={this.onSale}>On sale</button>
      	</div>
      	<div className="all__container__count">
      		<div className="all__container__count-1">{this.state.categories.length}</div>
      		<div className=" onClick={this.fetchProductsOnSale}all__container__count-2">items showing</div>
      	</div>
      		
      	<div className="all__container__products">
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
      </div>
    );
  }
}

export default Category;



