import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Selectedprojects from "../components/Selectedprojects";
import Contact from "../components/Contact";
import About from "../components/About";
import SEO from "../components/seo";

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Selectedprojects />
      <About />
      <Contact />
    </Layout>
  );
};
export default IndexPage;
