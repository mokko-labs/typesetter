import React, { Component } from 'react';

import HeaderApp from './HeaderApp';
import TypeViewer from './TypeViewer';
import SettingsPanel from './SettingsPanel';


class MainApp extends Component {
  render() {
    return (
      <div id="AppWrapper">
        <HeaderApp />
        <TypeViewer />
        <SettingsPanel />
      </div>
    );
  }
}

export default MainApp;
