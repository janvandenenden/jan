import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Container from "react-bootstrap/Container";

import Project from "./Project";

const ProjectInformation = {
  mockupmark: {
    title: "Mockup Mark",
    description:
      "Mockup Mark is an apparel mockup generator that enables artists, marketers & ecommerce store owners to easily create realistic lifestyle apparel mockups in seconds.",
    technology: ["React", "Node.js", "Docker", "AWS", "SCSS"],
    link: "mockup-mark",
    website: "https://mockupmark.com",
  },
  supermeme: {
    title: "Supermeme",
    description:
      "Supermeme is a Supreme style T-shirt generator and lets anyone create T-shirts with custom text in the style of the Supreme logo.",
    technology: ["Ruby on Rails", "React", "SCSS"],
    link: "supermeme",
    website: "https://supermeme.co",
  },
};
const Projects = () => {
  const image = useStaticQuery(graphql`
    query projectImages {
      supermemeImage: file(relativePath: { eq: "supermeme.png" }) {
        id
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mockupmarkImage: file(relativePath: { eq: "mockup-mark.png" }) {
        id
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="py-5 position-relative">
      <Container>
        <h1 className="display-4 text-center mt-4 mb-2 text-primary">
          Projects
        </h1>
        <p className="text-center small text-primary ">
          Things I have been working on recently
        </p>
        <Project
          data={ProjectInformation.mockupmark}
          image={image.mockupmarkImage.childImageSharp.fluid}
        />
        <Project
          data={ProjectInformation.supermeme}
          image={image.supermemeImage.childImageSharp.fluid}
        />
      </Container>
      <div class="custom-shape-divider-bottom-1610988694">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Projects;
