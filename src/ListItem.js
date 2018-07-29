import React, { PureComponent } from 'react';

class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  addToCart = () => {
    console.log('kmj');
    console.log('hahhah', this.props.item.cartCount);
    this.props.itemToCart(this.props.item, this.state.count);
  };

  render() {
    const item = this.props.item;
    {
      console.log('item', item.cartCount);
    }
    return (
      <div key={item.barcode} className="ListItem">
        <span className="itemName">{item.name}</span>
        <span className="price">
          {item.price}元/{item.unit}
        </span>
        <span>
          <button className="btn" onClick={this.decrement}>
            -
          </button>
          <span className="number">{this.state.count}</span>
          <button className="btn" onClick={this.increment}>
            +
          </button>
        </span>
        <span>
          <button className="btnToCart" onClick={this.addToCart}>
            {'Add To Cart'}
          </button>
        </span>
      </div>
    );
  }
}

export default ListItem;
