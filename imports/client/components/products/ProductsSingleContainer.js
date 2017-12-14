import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Products } from '../../../api/products';
import ProductsSingleList from './ProductsSingleList';

export default class ProductsSingleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const products = Products.find().fetch();
      this.setState({ products });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <ProductsSingleList key={this.state.products._id} products={this.state.products}/>;
  }
}
