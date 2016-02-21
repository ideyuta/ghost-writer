import React from 'react';
import ghostWriter from 'ghost-writer';

const struct = {
  en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  ja: [
    {
      i: 'anoiーhatoーvono',
      o: 'あのイーハトーヴォの'
    }, {
      i: 'sukitoottakaze',
      o: 'すきとおった風、'
    }, {
      i: 'natsudemo',
      o: '夏でも'
    }, {
      i: 'sokoni',
      o: '底に'
    }, {
      i: 'tsumetasawomotsu',
      o: '冷たさをもつ'
    }, {
      i: 'aoisora',
      o: '青いそら'
    }
  ]
};

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount() {
    const writer = ghostWriter(struct.ja);
    writer(text => this.setState({text}));
  }

  render() {
    return (
      <p
        className="text"
        dangerouslySetInnerHTML={{__html: this.state.text}}
      />
    );
  }
}
