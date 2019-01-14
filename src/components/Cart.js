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
                <img src="https://cdn3.iconfinder.com/data/icons/interface/100/close_button-512.png" />
              </button>
              </div>
          </header>
          <div>
            <ul className="ShoppingCart__list">
            {this.props.cartAdd.map(item => {
              return (
              <li className="Grid Item">
                <div className="Item__Cover">
                  <img className="ShoppingCart__img" src={ item.imageLink } />
                </div>
                <div className="Item__Description">
                  <div>
                    <div className="Grid Grid--expanded">
                      <div>
                        <h3>{ item.item }</h3>
                        <span>More text</span>
                      </div>
                      <div>
                        <button onClick= {(e) => this.props.deleteCart(item)}><i className="fa fa-trash" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="Grid Grid--expanded Grid--center Item--ts">
                    <select>
                      <option>1</option>
                    </select>
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
