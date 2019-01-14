import React, { Component } from 'react';
import logo from '../images/mf-logo-white.svg';

import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
        <div>
        	<header className="navegacion">
        		<Link to="/"><img src={logo} alt= "Mallory Furniture"></img></Link>
        		<ul className="navegacion__seccion1">
        			<Link to="/about"><li>About</li></Link>
        			<li><Link to='/terms'>Terms + Conditions</Link></li>
        			<li>|</li>
        			<Link to="/all-products"><li>All</li></Link>
        		</ul>
        		
                <ul className="navegacion__seccion2">
        			<Link to='/category/seating'><li>Seating</li></Link>
        			<Link to='/category/tables'><li>Tables</li></Link>
        			<Link to='/category/desks'><li>Desks</li></Link>
        			<Link to='/category/storage'><li>Storage</li></Link>
        			<Link to='/category/bedroom'><li>Bedroom</li></Link>
        			<Link to='/category/miscellaneous'><li>Misc</li></Link>
        			<li>|</li>
        		</ul>
                <button onClick={this.props.displayCart}>
        		<i className="fas fa-shopping-cart"></i>
                </button>
          	</header>
             

        </div>
    )
  }
}

export default Nav;
