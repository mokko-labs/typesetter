import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Select from 'react-select';
import axios from 'axios';

import ColorPicker from './ColorPicker';

const SettingsPanelWrapper = styled.section`
  padding: 20px 40px;
  text-align: center;
  position: fixed;
  left: 0;
  z-index: 10;
  justify-content: space-around;
  bottom:0;
  height:90px;
  width:100%;
  box-shadow: 0px -3px 10px 1px rgba(43, 43, 43, 0.07);
  background-color: white;
  align-items: center;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const SettingsPanelTitle = styled.span`
  display:inline-block;
  vertical-align: middle;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 20px;
  color:black;
  font-weight: bold;
  margin-right:80px;
`;
const InputWrapper = styled.span`
  display:inline-block;
  vertical-align: middle;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
`;
const SelectWrapper = styled.span`
  display:inline-block;
  text-align: left;
  vertical-align: middle;
  width:300px;
  margin-left: 20px;
  margin-right: 20px;
`;
const InputLabel = styled.span`
  display:block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 12px;
  color:#EE4761;
  margin-bottom: 8px;
  font-weight: 700;
  letter-spacing: 0.6px;
`;


class SettingsPanel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: 'Body / Base Style',
      options: null,
      selectedValue: null,
      baseColor: '#d9feff'
    };
  }


  componentWillMount = () => {
    this.props.fetchFonts();
  }

  componentWillReceiveProps = (newProps) => {
    if(newProps.fontsConfig && newProps.fontsConfig.fetched) {
      let fontsStack = []
      for (var index = 0; index < newProps.fontsConfig.fonts.length; index++) {
        fontsStack.push({ value: newProps.fontsConfig.fonts[index].family, label: newProps.fontsConfig.fonts[index].family });
      }
        this.setState({
          options: fontsStack
        })
    }
  }

  logChange = (val) => {
    this.props.updateFonts(val);
    this.setState({
      selectedValue: val
    })
  }

  render() {

    return (
      <SettingsPanelWrapper>
        <SettingsPanelTitle>
        {this.props.settingsPanel.type}
        </SettingsPanelTitle>
        <SelectWrapper>
          <div className="select-up">
            <Select
              name="form-field-name"
              value={this.state.selectedValue}
              options={this.state.options}
              onChange={this.logChange}
            />
          </div>
        </SelectWrapper>
        <InputWrapper>
          <InputLabel>
            COLOR
          </InputLabel>
          <ColorPicker color={this.props.baseConfig.color} element='BASE' />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>
            BACKGROUND COLOR
          </InputLabel>
          <ColorPicker color={this.props.baseConfig.backgroundColor} element='BASE_BACKGROUND' />
        </InputWrapper>


      </SettingsPanelWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseConfig: state.baseConfig,
    settingsPanel: state.settingsPanel,
    fontsConfig: state.fontsConfig
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchFonts: () => dispatch({
        type: "LOAD_FONTS",
        payload: axios('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB8mBlgFY3rx_1xc2KXQEptAf0Nudt2HkA&sort=popularity')
      }),
      updateFonts: (payload) => dispatch({
        type: 'UPDATE_FONT_H1',
        payload: payload
      })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel)
