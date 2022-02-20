import React from "react";
import Header from "./header";
import MainContent from "./content";
import Heading from "./content-heading";
import Footer from "./footer";

const ReactReason = () => {
  return (
    <React.Fragment>
      <Header />
      <Heading/>
      <MainContent/>
      <Footer/>
    </React.Fragment>
  );
};

export default ReactReason;
