import React, { Component } from "react";
import Title from "./Title";

export default class Article extends Component {
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <div align="center">
          <date>{this.props.date}</date>
        </div>
        <address align="center">{this.props.author}</address>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
