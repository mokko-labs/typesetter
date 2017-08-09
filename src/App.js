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


  constructor(props) {
   super(props)

   this.state = {
     device: 'desktop',
     primaryColor: '#0D0804', // Headings Color
     baseColor: '#00B259',  // Background Color
     textColor: '#114E1B',  // Paragraph / List Color
     headerFontFamily: 'Helvetica Neue, Helvetica, sans-serif',
     normalFontFamily: 'Verdana'
   };

 }

  applyBodyColor() {
    document.body.style.background = this.state.baseColor;
  }

  componentDidMount() {

    this.updateBodyColor();
  }

  updateBodyColor = () => {
    document.body.style.background = this.state.baseColor;
  }

  handleColorChange = (e) => {

    this.setState({
      baseColor: e.hex
    });

    document.body.style.background = e.hex;
  }

  handleFontChange = (e) => {
    this.setState({
      fontFamily: e.fontFamily
    });
  }

  render() {
    return (
      <div>
        <Header />

        <AppWrapper>
        <AppActionsBar activeView={this.state.device} primaryColor={this.state.primaryColor} baseColor={this.state.baseColor} />
        <Line color={this.state.primaryColor} />
        <TypeViewer headerFontFamily={this.state.headerFontFamily} normalFontFamily={this.state.normalFontFamily} primaryColor={this.state.primaryColor} textColor={this.state.textColor} fontFamily={this.state.fontFamily} />
        <Line color={this.state.primaryColor} />
        </AppWrapper>

        <SettingsPanel onColorChange={this.handleColorChange} onFontChange={this.handleFontChange} primaryColor={this.state.primaryColor} baseColor={this.state.baseColor} />
      </div>
    );
  }
}

export default App;
