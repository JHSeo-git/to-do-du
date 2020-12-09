import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetGlobal = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <title>To Do Du</title>
    </Helmet>
  );
};

export default HelmetGlobal;
