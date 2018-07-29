import React, { PureComponent } from 'react';

class CartItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const item = this.props.item;
    return (
      <div key={item.barcode} className="ListItem">
        <span className="itemName">{item.name}</span>
        <span className="price">
          {item.price}元/{item.unit}
        </span>
        <span>数量：{item.cartCount}</span>
      </div>
    );
  }
}

export default CartItem;
