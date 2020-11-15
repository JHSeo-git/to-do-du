import React, { Component } from "react";
import Header from "components/base/Header";

export class HeaderContainer extends Component {
  render() {
    return <Header userMenu={<div>user-menu</div>} />;
  }
}

export default HeaderContainer;
