import React, { PureComponent } from 'react';

class CartItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
  }

  componentWillMount() {
    console.log('kmj ---- mount');
    const item = this.props.item;
    const price =
      item.isDiscount && item.cartCount > 2
        ? (item.cartCount - 1) * item.price
        : item.cartCount * item.price;
    this.setState({
      price: price.toFixed(2)
    });
  }

  render() {
    const item = this.props.item;

    return (
      <div>
        <div key={item.barcode} className="ListItem">
          <span className="itemName">{item.name}</span>
          <span className="price">
            {item.price}元/{item.unit}
          </span>
          <span>数量：{item.cartCount}</span>
          <span>小计：{this.state.price}元</span>
        </div>
      </div>
    );
  }
}

export default CartItem;
