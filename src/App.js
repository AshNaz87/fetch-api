import React, { Component } from 'react';
import Figure from './components/Figure'
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetch('https://libraries.io/api/platforms?api_keye0c54bcef123283b9447d6f70d7f30bd')
      .then(response => response.json())
      .then(data => this.setState({
        platforms: data
      }))
  }

  render() {
    const { platforms } = this.state
    return (
      <div className="App">
        {platforms && platforms.map(platform =>
          <div key={`${platform.name}-wrapper`} className="platform-wrapper" style={platform.color === "#fff" ? {backgroundColor: '#000'} : {backgroundColor: platform.color}}>
            <h2 key={platform.name} className="title">{platform.name}</h2>
            <p>More information is available in the following <a href={platform.homepage}>link</a></p>
            <Figure key={platform.project_count} />
            <p style={{margin: '0px 0px 10px'}}>{platform.project_count}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
