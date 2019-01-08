import React, { Component } from "react";

import Header from "./Header";
import Nav from "./Nav";
import Meta from "./Meta";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <Nav />
      </div>
    );
  }
}

export default Page;
