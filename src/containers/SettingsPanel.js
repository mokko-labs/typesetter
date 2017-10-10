import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Select from 'react-select';
import axios from 'axios';
import WebFont from 'webfontloader';
import Slider from 'react-rangeslider'

import ColorPicker from './ColorPicker';

const SettingsPanelWrapper = styled.section`
  font-size: 16px !important;
  padding: 0px 40px;
  text-align: center;
  position: fixed;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
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

  .Select-menu-outer {
    font-size: 16px !important;
  }
`;
const SliderWrapper = styled.span`
  display:inline-block;
  text-align: left;
  vertical-align: middle;
  width:260px;
  margin-left: 20px;
  margin-right: 20px;
  padding-right: 50px;
  position: relative;

  .value {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 31px;
    font-size:16px;
  }
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
      selectedValue: null
    };
  }


  componentWillMount = () => {
    this.props.fetchFonts();
    this.setState({
      color: this.props.baseConfig.color,
      backgroundColor: this.props.baseConfig.backgroundColor,
      fontSize: this.props.baseConfig.fontSize * 16
    })
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

    if(this.props.settingsPanel !== newProps.settingsPanel) {
      console.log('New Props' + newProps.settingsPanel.type);
      switch (newProps.settingsPanel.type) {
        case 'BASE':
          this.setState({color: this.props.baseConfig.color, backgroundColor: this.props.baseConfig.backgroundColor, selectedValue: this.props.baseConfig.fontFamily, fontSize: this.props.baseConfig.fontSize * 16})
          break;
        case 'H1':
          this.setState({color: this.props.h1Config.color || this.props.baseConfig.color, selectedValue: this.props.h1Config.fontFamily, fontSize: this.props.h1Config.fontSize * 16 })
          break;
        case 'H2':
          this.setState({color: this.props.h2Config.color || this.props.baseConfig.color, selectedValue: this.props.h2Config.fontFamily, fontSize: this.props.h2Config.fontSize * 16 })
          break;
        case 'H3':
          this.setState({color: this.props.h3Config.color || this.props.baseConfig.color, selectedValue: this.props.h3Config.fontFamily, fontSize: this.props.h3Config.fontSize * 16 })
          break;
        case 'H4':
          this.setState({color: this.props.h4Config.color || this.props.baseConfig.color, selectedValue: this.props.h4Config.fontFamily, fontSize: this.props.h4Config.fontSize * 16 })
          break;
        case 'H5':
          this.setState({color: this.props.h5Config.color || this.props.baseConfig.color, selectedValue: this.props.h5Config.fontFamily, fontSize: this.props.h5Config.fontSize * 16 })
          break;
        case 'H6':
          this.setState({color: this.props.h6Config.color || this.props.baseConfig.color, selectedValue: this.props.h6Config.fontFamily, fontSize: this.props.h6Config.fontSize * 16 })
          break;
        case 'PARAGRAPH':
          this.setState({color: this.props.paragraphConfig.color || this.props.baseConfig.color, selectedValue: this.props.paragraphConfig.fontFamily, fontSize: this.props.paragraphConfig.fontSize * 16 })
          break;
        default:
          this.setState({color: this.props.baseConfig.color, backgroundColor: this.props.baseConfig.backgroundColor, selectedValue: this.props.baseConfig.fontFamily});
        }
    }

    if(this.props.baseConfig.fontFamily !== newProps.baseConfig.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.baseConfig.fontFamily],
          timeout: 10
        }
      });
    }

    if(this.props.h1Config.fontFamily !== newProps.h1Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h1Config.fontFamily || this.props.baseConfig.fontFamily],
           timeout: 10
        }
      });
    }
    if(this.props.h2Config.fontFamily !== newProps.h2Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h2Config.fontFamily || this.props.baseConfig.fontFamily],
           timeout: 10
        }
      });
    }
    if(this.props.h3Config.fontFamily !== newProps.h3Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h3Config.fontFamily || this.props.baseConfig.fontFamily],
           timeout: 10
        }
      });
    }
    if(this.props.h4Config.fontFamily !== newProps.h4Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h4Config.fontFamily || this.props.baseConfig.fontFamily],
           timeout: 10
        }
      });
    }
    if(this.props.h5Config.fontFamily !== newProps.h5Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h5Config.fontFamily || this.props.baseConfig.fontFamily],
           timeout: 10
        }
      });
    }

    if(this.props.paragraphConfig.fontFamily !== newProps.paragraphConfig.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.paragraphConfig.fontFamily || this.props.baseConfig.fontFamily],
           timeout: 10
        }
      });
    }
  }

  logChange = (val) => {
    this.props.updateFonts(val, this.props.settingsPanel.type);
    this.setState({
      selectedValue: val
    })
  }

  handleChangeReverse = (value) => {
    this.props.updateFontsSize(value/16, this.props.settingsPanel.type)
    this.setState({
      fontSize: value
    })
  }

  render() {

    return (
      <SettingsPanelWrapper>
        <SettingsPanelTitle>
        {this.props.settingsPanel.type}
        </SettingsPanelTitle>
        <SelectWrapper>
          <InputLabel>
            FONT FAMILY
          </InputLabel>
          <div className="select-up">
            <Select
              name="form-field-name"
              placeholder="System Fonts"
              value={this.state.selectedValue}
              options={this.state.options}
              onChange={this.logChange}
            />
          </div>
        </SelectWrapper>

        <SliderWrapper>
          <InputLabel>
            FONT SIZE
          </InputLabel>
          <div className='slider-horizontal'>
              <Slider
                min={9}
                max={150}
                value={this.state.fontSize}
                orientation='horizontal'
                onChange={this.handleChangeReverse}
              />
               <div className='value'>{this.state.fontSize}px</div>
          </div>
        </SliderWrapper>


        <InputWrapper>
          <InputLabel>
            COLOR
          </InputLabel>
          <ColorPicker color={this.state.color} element={this.props.settingsPanel.type} />
        </InputWrapper>
        <InputWrapper style={{'display' : this.props.settingsPanel.type === 'BASE' ? 'block' : 'none'}}>
          <InputLabel>
            BACKGROUND
          </InputLabel>
          <ColorPicker color={this.state.backgroundColor} element={this.props.settingsPanel.type+'_BACKGROUND'} />
        </InputWrapper>


      </SettingsPanelWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseConfig: state.baseConfig,
    h1Config: state.h1Config,
    h2Config: state.h2Config,
    h3Config: state.h3Config,
    h4Config: state.h4Config,
    h5Config: state.h5Config,
    h6Config: state.h6Config,
    paragraphConfig: state.paragraphConfig,
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
      updateFonts: (payload, element) => dispatch({
        type: 'UPDATE_FONT_'+element,
        payload: payload
      }),
      updateFontsSize: (payload, element) => dispatch({
        type: 'UPDATE_FONT_SIZE_'+element,
        payload: payload
      })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel)
