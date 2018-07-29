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
    this.props.itemToCart(this.props.item, this.state.count);
  };

  render() {
    const item = this.props.item;
    {
      console.log('item', item.cartCount);
    }
    return (
      <div key={item.barcode}>
        <div className="container" id="title1">
          <div className="row">
            <div className="col-sm">{item.name}</div>
            <div className="col-sm">
              {item.price}元/{item.unit}
            </div>
            <div className="col-sm">
              <span
                className="badge badge-light"
                onClick={this.decrement}
                id="span1"
              >
                -
              </span>
              <span className="number">{this.state.count}</span>
              <span
                className="badge badge-light"
                onClick={this.increment}
                id="span2"
              >
                +
              </span>
            </div>
            <div className="col-sm">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.addToCart}
                id="addToCart"
              >
                {'Add To Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
