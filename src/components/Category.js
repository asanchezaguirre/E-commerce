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

allProducts = (e) => {
	var {categoryType}  = this.props.match.params;
    request
    .get(`https://mallory-furniture-admin.now.sh/api/v1/products?category=${categoryType}`)
    .then((res) =>{
    this.setState({
      categories: res.body
      })
    })
  }

  sale = (e) => {
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

 //Switch es como un if 
changeImage = (categoryType) => {
	switch (categoryType){
		case "seating":
			return require ("../images/category-seating.png")
			break;
		case 'tables':
			return  require ("../images/category-tables.png")
			break;
		case 'desks':
			return  require ("../images/category-desks.png")
			break;
		case 'storage':
			return  require ("../images/category-storage.png")
			break;
		case 'bedroom':
			return require ("../images/category-bedroom.png")
			break;
		case 'miscellaneous':
			return require ("../images/category-miscellaneous.png")
			break;
		

	}
}



  render() {
  
    return (
      <div className="all__container">
      <img id="imagen__cambia" src={this.changeImage(this.props.match.params.categoryType)}></img>
        <div className="subtitulos">
          <h2>{this.props.match.params.categoryType.toUpperCase()}</h2>
        	<p>All {this.props.match.params.categoryType} products </p>
        </div>
      	<div className="all__container__buttons">
      		<button onClick={this.allProducts}>All Items</button>
      		<button onClick={this.sale}>On sale</button>
      	</div>
      	<div className="all__container__count">
      		<div className="all__container__count-1">{this.state.categories.length}</div>
      		<div className="all__container__count-2"><p>items showing</p></div>
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



