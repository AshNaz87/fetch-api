import React, { Component } from 'react'
import star from '../images/star.svg'
import '../index.css'

class Figure extends Component {
  render() {  
    return (
      <div>
        <figure>
          <img src={star} alt="Project Count" className="project-count" />                    
        </figure>
      </div>
    )
  }
}

export default Figure