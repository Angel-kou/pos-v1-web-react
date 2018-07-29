import React, { PureComponent } from 'react';

class PromotionItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getItemName = () => {
    this.props.allItems.forEach(item => {
      if (this.props.item.barcodes.includes(item.barcode))
        this.state.items.push(item);
    });
    return this.state.items;
  };

  render() {
    const item = this.props.item;
    this.state.items = this.getItemName();
    return (
      <div key={item.id} className="PromotionItem">
        <span className="itemType">DISCOUNT : {item.type}</span>
        {this.state.items.map(barcode => {
          return <div>{barcode.name}</div>;
        })}
      </div>
    );
  }
}

export default PromotionItem;
