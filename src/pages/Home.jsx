import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" id="" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}