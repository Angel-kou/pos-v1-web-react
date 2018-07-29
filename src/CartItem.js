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
          <div className="container" id="title1">
            <div className="row">
              <div className="col-sm">{item.name}</div>
              <div className="col-sm">
                {item.price}元/{item.unit}
              </div>
              <div className="col-sm">{item.cartCount}</div>
              <div className="col-sm">{this.state.price}元</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
