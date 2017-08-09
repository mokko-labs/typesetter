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
  background: white;
  justify-content: center;
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
      color: 'black'
    };
  }

  componentDidMount() {
    const { baseColor, primaryColor, ...props } = this.props;
    this.setState({ color: baseColor });
  }

  handleColorChange = (e) => {
    this.setState({
      color: e.hex
    });
    this.props.onColorChange(e);
  }

  handleFontChange = (e) => {

  }

  render() {
    const { handler, baseColor, primaryColor, ...props } = this.props;

    return (
      <SettingsPanelWrapper>
        <SettingsPanelTitle>
        {this.state.title}
        </SettingsPanelTitle>
        <SketchPicker color={ this.state.color } onChange={ this.handleColorChange } />

      </SettingsPanelWrapper>
    );
  }
}

export default SettingsPanel;
