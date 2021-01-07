import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Selectedprojects from "../components/Selectedprojects"
import About from "../components/About"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Selectedprojects />
    <About />
  </Layout>
)

export default IndexPage
