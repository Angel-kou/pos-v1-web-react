import React, { PureComponent } from 'react';
import './App.css';
import { loadAllItems, loadPromotions } from './database';
import ListItem from '../src/ListItem.js';
import CartItem from '../src/CartItem.js';
import PromotionItem from '../src/PromotionItem.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      AllItems: this.getAllItems(),
      cartPage: false,
      cart: []
    };
  }

  getAllItems = () => {
    const allItems = loadAllItems().map(item => {
      item['cartCount'] = 0;
      item['isDiscount'] = false;
      return item;
    });

    allItems.map(item => {
      if (loadPromotions()[0].barcodes.includes(item.barcode)) {
        item['isDiscount'] = true;
      } else {
        item['isDiscount'] = false;
      }
      return item;
    });
    console.log('items--kmj 9999 ', allItems);
    return allItems;
  };

  togglePage = () => {
    this.setState({
      cart: !this.state.cartPage ? this.state.cart : [],
      cartPage: !this.state.cartPage
    });
  };

  addItemToCart = (addedItem, count) => {
    if (count != 0) {
      const item = this.state.cart.find(
        item => item.barcode === addedItem.barcode
      );
      console.log('find', item);
      if (item !== undefined) {
        item.cartCount += count;
      } else {
        addedItem.cartCount += count;
        this.state.cart.push(addedItem);
      }

      this.setState({
        cart: this.state.cart
      });
    }
    console.log('cart', this.state.cart);
  };

  confirmBuy = () => {
    const result = this.state.cart.map(
      item => item.barcode + '-' + item.cartCount
    );
    console.log(result);
    alert(result);
  };

  render() {
    return (
      <div className="App">
        {!this.state.cartPage ? (
          <div>
            <h1>ITEM List</h1>
            <div className="AllItems">
              {this.state.AllItems.map(item => (
                <ListItem
                  key={item.barcode}
                  item={item}
                  isCartPage={this.state.cartPage}
                  itemToCart={this.addItemToCart}
                />
              ))}
            </div>

            <button
              type="button"
              className="btn btn-primary"
              id="cart"
              onClick={this.togglePage}
            >
              购物车
            </button>
          </div>
        ) : (
          <div>
            <h1>Cart List</h1>
            <div className="AllItems">
              {this.state.cart.map(item => (
                <CartItem
                  key={item.barcode}
                  item={item}
                  isCartPage={this.state.cartPage}
                />
              ))}
            </div>
            <button
              type="button"
              className="btn btn-primary"
              id="cart"
              onClick={this.confirmBuy}
            >
              确认
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="cart"
              onClick={this.togglePage}
            >
              返回
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
