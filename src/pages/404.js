import React from "react";
import { Link } from "gatsby";
import Jumbotron from "react-bootstrap/Jumbotron";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ThankYou = () => (
  <Layout>
    <SEO title="Page not found - error 404" />
    <Jumbotron
      style={{ height: `calc(100vh - 116px)`, width: "100vw" }}
      className="d-flex flex-column justify-content-center my-0"
    >
      <div className="text-center">
        <h1 className="my-5">Whoops - looks like something went wrong!</h1>

        <Link to="/" className="btn btn-lg bg-info text-light mx-auto">
          Back to the homepage
        </Link>
      </div>
    </Jumbotron>
  </Layout>
);

export default ThankYou;
