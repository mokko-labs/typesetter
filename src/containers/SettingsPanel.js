import React, { Component, } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const SettingsPanelWrapper = styled.section `
  padding: 20px 40px;
  text-align: center;
  display: flex;
  position: fixed;
  bottom:0;
  height:90px;
  width:100%;
  box-shadow: 0px -3px 10px 1px rgba(43, 43, 43, 0.07);
  background-color: white;  justify-content: center;
  align-items: center;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const SettingsPanelTitle = styled.span `
  display:inline-block;
  vertical-align: middle;
  font-size: 24px;
  margin-right:50px;
`;



class SettingsPanel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: 'Body / Base Style',
      color: 'black',
      baseColor: '#d9feff'
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


  render() {

    return (
      <SettingsPanelWrapper>
        <SettingsPanelTitle>
        {this.state.title}
        </SettingsPanelTitle>
        <SketchPicker color={ this.state.baseColor } onChange={ this.handleColorChange } />

      </SettingsPanelWrapper>
    );
  }
}

export default SettingsPanel;
