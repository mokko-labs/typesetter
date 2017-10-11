import React, { Component, } from 'react';

import Header from './Header';
import TypeViewer from './TypeViewer';
import SettingsPanel from './SettingsPanel';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <TypeViewer />
        <SettingsPanel />
      </div>
    );
  }
}

export default App;
