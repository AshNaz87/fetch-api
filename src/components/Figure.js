import React, { Component } from 'react'
import star from '../images/star.svg'
import '../index.css'

class Figure extends Component {
  render() {
    const { platforms } = this.props
    return (
      <div>
        <figure>
          <img src={star} alt="Project Count" className="project-count" />
          <figcaption>{platforms && platforms.map(platform => platform.project_count)}</figcaption>
        </figure>
      </div>
    )
  }
}

export default Figure