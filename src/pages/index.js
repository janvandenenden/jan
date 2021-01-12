import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Selectedprojects from "../components/Selectedprojects"
import About from "../components/About"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Selectedprojects />
      <About />
    </Layout>
  )
}
export default IndexPage
