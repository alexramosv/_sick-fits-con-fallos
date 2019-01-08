import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <nav>
          <a href="_">Menu</a>
        </nav>
        <Component />
      </Container>
    );
  }
}
export default MyApp;
