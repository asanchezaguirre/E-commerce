import React, { Component } from 'react';
import logoBlack from '../images/mf-logo-black.svg'

import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
    	<div className="footer">
	    	<img src={logoBlack} alt='Mallory Furniture'></img>
	    	<hr className="footer__line" />
	    	<div className="footer__menu">
	    		<div className="footer__menu-1">
		    		<p className="footer__title">Company</p>
		    		<ul>
		    			<li>About</li>
		    			<li>Press</li>
		    			<li>Terms + Conditions</li>
		    		</ul>
		    	</div>
		    	<div className="footer__menu-2">
		    		<p className="footer__title">Categories</p>
		    		<ul>
		    			<Link to='/category/seating'><li>Seating</li></Link>
		    			<Link to='/category/tables'><li>Tables</li></Link>
		    			<Link to='/category/miscellaneous'><li>Misc</li></Link>
		    		</ul>
		    	</div>
		    	<div className="footer__menu-3">
		    		<p className="footer__title">Social</p>
		    		<span>
		    		<i className="fab fa-instagram"></i>
		    		<i className="fab fa-twitter"></i>
		    		<i className="fab fa-pinterest"></i>
		    		</span>
		    	</div>
		    </div>
	    </div> 
      
    );
  }
}

export default Footer;
