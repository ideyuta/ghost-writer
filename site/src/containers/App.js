import React from 'react';
import ghostWriter from 'ghost-writer';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount() {
    ghostWriter('あのイーハトーヴォのすきとおった風', text => this.setState({text}), 300);
  }

  render() {
    return (
      <div>
        <p>Ghost Writer</p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
