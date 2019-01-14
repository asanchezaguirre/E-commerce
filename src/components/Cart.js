import React, { Component } from 'react';
import '../CartStyle.css'

class Cart extends Component {

  render() {
    return (
      <aside>
        <div className={(this.props.showCart) ? "ShoppingCart" : "ShoppingCart is-visible"}>
          <header className="ShoppingCart__header">
            <div>
              <h3 className="ShoppingCart__title">Your Cart</h3>
              <button onClick={this.props.displayCart} className="ShoppingCart__close">
                <i class="fas fa-times"></i>
              </button>
              </div>
          </header>
          <div>
            <ul className="ShoppingCart__list">
            {this.props.cartAdd.map(item => {
              return (
              <li className="Grid Item">
                <div>
                  <button onClick= {(e) => this.props.deleteCart(item)}><i className="fas fa-times" /></button>
                </div>
                <div className="Item__Cover">
                  <img className="ShoppingCart__img" src={ item.imageLink } />
                </div>
                <div className="Item__Description">
                  <div>
                    <div className="Grid Grid--expanded">
                      <div>
                        <h3>{ item.item }</h3>
                      </div>
                      
                    </div>
                  </div>
                  <div className="Grid Grid--expanded Grid--center Item--ts">
                    <p>${ item.price }</p>
                  </div>
                </div>
              </li>
                )
            })
          }
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default Cart;
