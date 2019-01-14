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
        			<Link className="underline" to="/about"><li>About</li></Link>
        			<Link className="underline" to='/terms'><li>Terms + Conditions</li></Link>
        			<li>|</li>
        			<Link className="underline" to="/all-products"><li>All</li></Link>
        		</ul>
        		
                <ul className="navegacion__seccion2">
        			<Link className="underline" to='/category/seating'><li>Seating</li></Link>
        			<Link className="underline" to='/category/tables'><li>Tables</li></Link>
        			<Link className="underline" to='/category/desks'><li>Desks</li></Link>
        			<Link className="underline" to='/category/storage'><li>Storage</li></Link>
        			<Link className="underline" to='/category/bedroom'><li>Bedroom</li></Link>
        			<Link className="underline" to='/category/miscellaneous'><li>Misc</li></Link>
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
