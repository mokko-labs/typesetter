import React, { Component, } from 'react';
import { Header, AppActionsBar, TypeViewer, SettingsPanel } from './components/index';
import { Line } from './components/Common/index';
import styled from 'styled-components';

const AppWrapper = styled.section`
  max-width:1700px;
  margin:20px auto;

  @media (max-width: 1600px) {
    max-width:1400px;
  }
  @media (max-width: 1300px) {
    max-width:1100px;
  }
`;

class App extends Component {
  state = {
    device: 'desktop',
    primaryColor: '#0D0804', // Headings Color
    baseColor: '#00B259',  // Background Color
    textColor: '#114E1B'  // Paragraph / List Color
  };

  constructor(props) {
   super(props)
   this.handler = this.updateBodyColor.bind(this)
 }



  applyBodyColor() {
    document.body.style.background = this.state.baseColor;
  }

  componentDidMount() {
    this.applyBodyColor();
  }

  updateBodyColor(val) {
    console.log('asdas' + val);
    this.setState({
      primaryColor: val
    })
    document.body.style.background = this.state.baseColor;
  }

  render() {
    return (
      <div>
        <Header />

        <AppWrapper>
        <AppActionsBar activeView={this.state.device} primaryColor={this.state.primaryColor} baseColor={this.state.baseColor} />
        <Line color={this.state.primaryColor} />
        <TypeViewer primaryColor={this.state.primaryColor} textColor={this.state.textColor} />
        <Line color={this.state.primaryColor} />
        </AppWrapper>

        <SettingsPanel primaryColor={this.state.primaryColor} baseColor={this.state.baseColor} />
      </div>
    );
  }
}

export default App;
