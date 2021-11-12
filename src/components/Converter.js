import React, { Component } from 'react';

export default class Converter extends Component {
  render() {
    return (
      <div className="converter">
        <h2>USD para BRL</h2>
        <input type="text"></input>
        <input type="button" value="Converter"></input>
        <h2>Valor convertido</h2>
      </div>
    )
  }
}
