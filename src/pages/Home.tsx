import React from "react";
import PageTemplate from "components/base/PageTemplate";
import HomeContainer from "containers/home/HomeContainer";
import HeaderContainer from "containers/base/HeaderContainer";

const Home = () => {
  return (
    <PageTemplate header={<HeaderContainer />}>
      <HomeContainer />
    </PageTemplate>
  );
};

export default Home;
