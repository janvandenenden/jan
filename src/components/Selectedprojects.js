import React from "react"

import Container from "react-bootstrap/Container"

import Project from "./Project"

const ProjectInformation = {
  mockupmark: {
    title: "Mockup Mark",
    description:
      "Mockup Mark is an apparel mockup generator that enables artists, marketers & ecommerce store owners to easily create realistic lifestyle apparel mockups in seconds.",
    technology: ["React", "Node.js", "Docker", "AWS", "SCSS"],
    link: "mockupmark",
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
}
const Projects = () => {
  return (
    <Container>
      <h1 className="display-4 text-center mt-4 mb-2">Selected work</h1>
      <p className="text-center small">
        Projects I have been working on recentely
      </p>
      <Project data={ProjectInformation.mockupmark} />
      <Project data={ProjectInformation.supermeme} />
    </Container>
  )
}

export default Projects
