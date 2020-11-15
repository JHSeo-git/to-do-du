import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface Props {
  children: React.ReactNode;
}

const HelmetTemplate = ({ children }: Props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default HelmetTemplate;
