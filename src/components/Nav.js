import React, { Component } from 'react';
import logo from '../images/mf-logo-white.svg';

import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
    	<header className="navegacion">
    		<Link to="/"><img src={logo} alt= "Mallory Furniture"></img></Link>
    		<ul className="navegacion__seccion1">
    			<Link to="/about"><li>About</li></Link>
    			<li><Link to='/terms'>Terms + Conditions</Link></li>
    			<li>|</li>
    			<Link to="/all-products"><li>All</li></Link>
    		</ul>
    		<ul className="navegacion__seccion2">
    			<li>Seating</li>
    			<li>Tables</li>
    			<li>Desks</li>
    			<li>Storage</li>
    			<li>Bedroom</li>
    			<li>Misc</li>
    			<li>|</li>
    		</ul>
    		<i className="fas fa-shopping-cart"></i>
      	</header>
    );
  }
}

export default Nav;
