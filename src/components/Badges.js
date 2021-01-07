import React from "react"

import Badge from "react-bootstrap/Badge"

const Badges = ({ technology }) => {
  return (
    <div>
      {technology.map((tech, index) => (
        <Badge key={index} variant="primary" className="mr-2">
          {tech}
        </Badge>
      ))}
    </div>
  )
}

export default Badges
