import React from "react";
import PageTemplate from "components/base/PageTemplate";
import Header from "components/base/Header";
import HomeContainer from "containers/home/HomeContainer";

const Home = () => {
  return (
    <PageTemplate header={<Header />}>
      <HomeContainer />
    </PageTemplate>
  );
};

export default Home;
