import React, { Component, } from 'react';
import styled from 'styled-components';

import { Line } from '../components';

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
