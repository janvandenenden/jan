import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";

import ProjectCard from "./ProjectCard";

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
    <div className="py-5 position-relative bg-light">
      <Container>
        <h1 className="display-4 text-center mt-4 mb-2 text-dark">
          Featured projects
        </h1>
        <p className="text-center small text-dark ">
          Things I have been working on recently
        </p>
        <Fade left>
          <ProjectCard
            data={ProjectInformation.mockupmark}
            image={image.mockupmarkImage.childImageSharp.fluid}
          />
        </Fade>
        <Fade right>
          <ProjectCard
            data={ProjectInformation.supermeme}
            image={image.supermemeImage.childImageSharp.fluid}
          />
        </Fade>
      </Container>
    </div>
  );
};

export default Projects;
