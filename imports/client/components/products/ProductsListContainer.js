import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Products } from '../../../api/products';
import ProductsList from './ProductsList';

export default class ProductsListContainer extends React.Component {
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
    return <ProductsList products={this.state.products}/>;
  }
}
