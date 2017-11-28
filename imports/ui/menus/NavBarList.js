import React from 'react';
import { Tracker } from 'meteor/tracker';

import { MenuItems } from '../../api/menuItems';
import NavBarListItem from './NavBarListItem';

export default class NavBarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const items = MenuItems.find().fetch();
      this.setState({ items });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  renderMenuListItem() {
    return this.state.items.map((item) => {
      return (
        <NavBarListItem key={item._id} {...item}/>
      );
    });
  }
  render() {
    return (
      <div className="nav-bar-component-5 w-hidden-medium w-hidden-small w-hidden-tiny">
        {this.renderMenuListItem()}
      </div>
    );
  }
}
