import React, { Component } from "react";
import Header from "components/base/Header";
import UserMenu from "components/base/UserMenu";

export class HeaderContainer extends Component {
  render() {
    return <Header userMenu={<UserMenu />} />;
  }
}

export default HeaderContainer;
