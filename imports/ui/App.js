import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Monthly Cup</h1>
        <p>Home</p>
        <p>Links:</p>
        <a href="/">
          <div>Home</div>
        </a>
        <a href="/faq">
          <div>FAQ</div>
        </a>
      </div>
    );
  }
}
