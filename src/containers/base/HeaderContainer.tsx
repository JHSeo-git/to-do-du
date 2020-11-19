import React, { Component } from "react";
import Header from "components/base/Header";
import UserMenu from "components/base/UserMenu";
import UserMenuButton from "components/base/UserMenuButton";

export class HeaderContainer extends Component {
  render() {
    return (
      <Header userMenu={<UserMenu />} userMenuButton={<UserMenuButton />} />
    );
  }
}

export default HeaderContainer;
