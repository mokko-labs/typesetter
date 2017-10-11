import React, {Component} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import Select from 'react-select';
import axios from 'axios';
import WebFont from 'webfontloader';
import Slider from 'react-rangeslider'
import _ from 'lodash';
import ColorPicker from './ColorPicker';

const SettingsPanelWrapper = styled.section `
  font-size: 16px !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 0px 40px;
  text-align: center;
  position: fixed;
  left: 0;
  z-index: 10;
  display: block;
  bottom:0;
  height:90px;
  width:100%;
  box-shadow: 0px -3px 10px 1px rgba(43, 43, 43, 0.07);
  background-color: white;
  align-items: center;
  font-weight: 400;

  .Select-control {
    border: none;
    border-bottom: 1px solid #cacaca !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding-right: 0;
  }
  .Select-placeholder, .Select--single > .Select-control .Select-value ,
  .Select-input {
    padding-left: 0;
    padding-right: 5px;
    font-size: 15px;
    color:black;
  }
  .Select-arrow,
  .Select-arrow:hover {
    border-width: 8px 7px 1.5px;
    border-color: #EE4761 transparent transparent;
  }
  .Select,
  .Select.is-focused,
  .Select.is-clearable,
  .Select.is-open,
  .Select.is-searchable,
  .Select.is-focused,
  .Select-value,
  .Select-placeholder {
    box-shadow: none !important;
    border:none !important;
    outline: none !important;
    border-radius: 0 !important;
    &>* {
      box-shadow: none !important;
      outline: none !important;
      border-radius: 0 !important;
    }
  }
  .Select-arrow-zone {
    padding-right: 0;
    width: 20px;
  }
  .Select.is-focused {
    .Select-control {
      border-bottom: 1px solid #000 !important;
    }
  }
  .Select-menu-outer {
    border-color: #cacaca;
    span, p, div, a {
      color:black;
      font-size: 15px;
    }
    a:hover,
    li:hover,
    span:hover  {
      background: red !important;
      color:red !important;
    }
  }

  .rangeslider {
    margin:0;
  }
  .slider-horizontal {
    height: 30px;
    padding-top: 20px;
  }
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const SettingsContentWrap = styled.div `
  max-width: 1400px;
  margin:0 auto;
  display: flex;
  height:100%;
  justify-content: center;
  align-items: center;
`
const SettingsPanelTitle = styled.span `
  display:inline-block;
  vertical-align: middle;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 20px;
  color:black;
  top:50%;
  margin-top: -10px;
  position: absolute;
  left:30px;
  font-weight: bold;
  margin-right:80px;
`;
const InputWrapper = styled.span `
  display:inline-block;
  vertical-align: middle;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
`;
const SelectWrapper = styled.span `
  display:inline-block;
  text-align: left;
  vertical-align: middle;
  width:270px;
  margin-left: 20px;
  margin-right: 20px;

  .Select-menu-outer {
    font-size: 16px !important;
  }
`;
const SliderWrapper = styled.span `
  display:inline-block;
  text-align: left;
  vertical-align: middle;
  width:230px;
  margin-left: 20px;
  margin-right: 20px;
  padding-right: 50px;
  position: relative;

  .value {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 26px;
    font-size: 15px;
    font-weight: 400;
  }
`;
const InputLabel = styled.span `
  display:block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 12px;
  color:#EE4761;
  margin-bottom: 3px;
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
      weightOptions: [{value: 100, label: '100'},{value: 300, label: '300'},{value: 400, label: '400'},{value: 600, label: '600'},{value: 800, label: '800'}],
      selectedWeight: null,
      weightString: null
    };
  }

  _updateBaseStyle = (params) => {
    document.body.style.background = params.backgroundColor
    document.body.style.fontSize = params.fontSize / 16 + 'em'
    document.body.style.fontFamily = params.fontFamily
    document.body.style.fontWeight = params.fontWeight
    document.body.style.color = params.color
  }

  componentWillMount = () => {
    this.props.fetchFonts();
    if(this.props.baseConfig) {
      this._updateBaseStyle(this.props.baseConfig)
    }
    this.setState({
      color: this.props.baseConfig.color,
      backgroundColor: this.props.baseConfig.backgroundColor,
      fontSize: this.props.baseConfig.fontSize,
      lineHeight: this.props.paragraphConfig.fontSize,
      selectedWeight: this.props.baseConfig.fontWeight
    })

  }

  componentWillReceiveProps = (newProps) => {
    if(this.props.baseConfig !== newProps.baseConfig) {
      this._updateBaseStyle(newProps.baseConfig)
    }
    if (newProps.fontsConfig && newProps.fontsConfig.fetched) {
      let fontsStack = []
      for (var index = 0; index < newProps.fontsConfig.fonts.length; index++) {
        fontsStack.push({value: newProps.fontsConfig.fonts[index].family, label: newProps.fontsConfig.fonts[index].family});
      }
      this.setState({options: fontsStack})
    }
    if (this.props.settingsPanel !== newProps.settingsPanel) {

      switch (newProps.settingsPanel.type) {
        case 'BASE':
          this.setState({
            color: this.props.baseConfig.color,
            backgroundColor: this.props.baseConfig.backgroundColor,
            selectedValue: this.props.baseConfig.fontFamily,
            selectedWeight: this.props.baseConfig.fontWeight,
            fontSize: this.props.baseConfig.fontSize
          })
          break;
        case 'H1':
        console.log('H1 Props' +  this.props.h1Config.fontFamily);
          this.setState({
            color: this.props.h1Config.color || this.props.baseConfig.color,
            selectedValue: this.props.h1Config.fontFamily || this.props.baseConfig.fontFamily,
            selectedWeight: this.props.h1Config.fontWeight,
            fontSize: this.props.h1Config.fontSize,
            lineHeight: this.props.h1Config.lineHeight
          })
          break;
        case 'H2':
          this.setState({
            color: this.props.h2Config.color || this.props.baseConfig.color,
            selectedValue: this.props.h2Config.fontFamily || this.props.baseConfig.fontFamily,
            selectedWeight: this.props.h2Config.fontWeight,
            fontSize: this.props.h2Config.fontSize,
            lineHeight: this.props.h2Config.lineHeight
          })
          break;
        case 'H3':
          this.setState({
            color: this.props.h3Config.color || this.props.baseConfig.color,
            selectedValue: this.props.h3Config.fontFamily || this.props.baseConfig.fontFamily,
            selectedWeight: this.props.h3Config.fontWeight,
            fontSize: this.props.h3Config.fontSize,
            lineHeight: this.props.h3Config.lineHeight
          })
          break;
        case 'H4':
          this.setState({
            color: this.props.h4Config.color || this.props.baseConfig.color,
            selectedValue: this.props.h4Config.fontFamily || this.props.baseConfig.fontFamily,
            selectedWeight: this.props.h4Config.fontWeight,
            fontSize: this.props.h4Config.fontSize,
            lineHeight: this.props.h4Config.lineHeight
          })
          break;
        case 'H5':
          this.setState({
            color: this.props.h5Config.color || this.props.baseConfig.color,
            selectedValue: this.props.h5Config.fontFamily || this.props.baseConfig.fontFamily,
            selectedWeight: this.props.h5Config.fontWeight,
            fontSize: this.props.h5Config.fontSize,
            lineHeight: this.props.h5Config.lineHeight
          })
          break;
        case 'H6':
          this.setState({
            color: this.props.h6Config.color || this.props.baseConfig.color,
            selectedValue: this.props.h6Config.fontFamily || this.props.baseConfig.fontFamily,
            selectedWeight: this.props.h6Config.fontWeight,
            fontSize: this.props.h6Config.fontSize,
            lineHeight: this.props.h6Config.lineHeight
          })
          break;
        case 'PARAGRAPH':
          this.setState({
            color: this.props.paragraphConfig.color || this.props.baseConfig.color,
            selectedValue: this.props.paragraphConfig.fontFamily || this.props.baseConfig.fontFamily,
            selectedWeight: this.props.paragraphConfig.fontWeight,
            fontSize: this.props.paragraphConfig.fontSize,
            lineHeight: this.props.paragraphConfig.lineHeight
          })
          break;
        default:
          this.setState({color: this.props.baseConfig.color, backgroundColor: this.props.baseConfig.backgroundColor, selectedValue: this.props.baseConfig.fontFamily});
      }
    }

    /*
    if (this.props.baseConfig.fontFamily !== newProps.baseConfig.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.baseConfig.fontFamily],
          timeout: 10
        }
      });
    }
    if (this.props.h1Config.fontFamily !== newProps.h1Config.fontFamily) {
      console.log('Loading font' + newProps.h1Config.fontFamily+ ':' + this.state.weightString || this.props.baseConfig.fontFamily);
      WebFont.load({
        google: {
          families: [newProps.h1Config.fontFamily || this.props.baseConfig.fontFamily + ':' + this.props.h1Config.fontWeight],
          timeout: 10
        }
      });
    }
    if (this.props.h2Config.fontFamily !== newProps.h2Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h2Config.fontFamily || this.props.baseConfig.fontFamily],
          timeout: 10
        }
      });
    }
    if (this.props.h3Config.fontFamily !== newProps.h3Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h3Config.fontFamily || this.props.baseConfig.fontFamily],
          timeout: 10
        }
      });
    }
    if (this.props.h4Config.fontFamily !== newProps.h4Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h4Config.fontFamily || this.props.baseConfig.fontFamily],
          timeout: 10
        }
      });
    }
    if (this.props.h5Config.fontFamily !== newProps.h5Config.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.h5Config.fontFamily || this.props.baseConfig.fontFamily],
          timeout: 10
        }
      });
    }

    if (this.props.paragraphConfig.fontFamily !== newProps.paragraphConfig.fontFamily) {
      WebFont.load({
        google: {
          families: [newProps.paragraphConfig.fontFamily || this.props.baseConfig.fontFamily],
          timeout: 10
        }
      });
    }
    */
  }

  changeFontFamily = (val) => {
    console.log(val);
    this.props.updateFonts(val, this.props.settingsPanel.type);
    // Real font
    if(val) {
      let font = _.findLast(this.props.fontsConfig.fonts, {family: val.label});
      if(font) {
        let variants = font.variants;
        let options = [];
        let optionsStr = [];
        variants.forEach(variant => {
          try {
            if (variant.indexOf('italic') === -1) {
              options.push({
                label: variant,
                value: variant
              });
              optionsStr.push(variant);
            }
          } catch (ex) {
          }
        });
        this.setState({
          weightOptions: options,
          weightString: optionsStr.join()
        })
        WebFont.load({
          google: {
            families: [val.label+':'+optionsStr.join()],
            timeout: 10
          }
        });
      }
    }
    this.setState({selectedValue: val})
  }

  weightChange = (val) => {
    this.props.updateFontWeight(val, this.props.settingsPanel.type);
    this.setState({selectedWeight: val})
  }

  handleChangeFontSize = (value) => {
    this.props.updateFontsSize(value, this.props.settingsPanel.type)
    this.setState({fontSize: value})
  }

  handleChangeLineHeight = (value) => {
    this.props.updateLineHeight(value, this.props.settingsPanel.type)
    this.setState({lineHeight: value})
  }

  render() {

    return (
      <SettingsPanelWrapper>

        <SettingsPanelTitle>
          {this.props.settingsPanel.type}
        </SettingsPanelTitle>

        <SettingsContentWrap>
          <SelectWrapper>
            <InputLabel>
              FONT FAMILY
            </InputLabel>
            <div className="select-up">
              <Select name="form-field-name" placeholder="System Fonts" value={this.state.selectedValue} options={this.state.options} onChange={this.changeFontFamily}/>
            </div>
          </SelectWrapper>

          <SelectWrapper>
            <InputLabel>
              FONT WEIGHT
            </InputLabel>
            <div className="select-up">
              <Select name="form-field-name" className={'weight_'+this.state.selectedWeight.label} placeholder="Select Font Weight" value={this.state.selectedWeight} options={this.state.weightOptions} onChange={this.weightChange}/>
            </div>
          </SelectWrapper>

          <SliderWrapper>
            <InputLabel>
              FONT SIZE
            </InputLabel>
            <div className='slider-horizontal'>
              <Slider min={9} max={150} value={this.state.fontSize} orientation='horizontal' onChange={this.handleChangeFontSize}/>
              <div className='value'>{this.state.fontSize}px</div>
            </div>
          </SliderWrapper>

          <SliderWrapper style={{
            'display': this.props.settingsPanel.type !== 'BASE'
              ? 'block'
              : 'none'
          }}>
            <InputLabel>
              LINE HEIGHT
            </InputLabel>
            <div className='slider-horizontal'>
              <Slider min={9} max={150} value={this.state.lineHeight} orientation='horizontal' onChange={this.handleChangeLineHeight}/>
              <div className='value'>{this.state.lineHeight}px</div>
            </div>
          </SliderWrapper>

          <InputWrapper>
            <InputLabel>
              COLOR
            </InputLabel>
            <ColorPicker color={this.state.color} element={this.props.settingsPanel.type}/>
          </InputWrapper>
          <InputWrapper style={{
            'display': this.props.settingsPanel.type === 'BASE'
              ? 'block'
              : 'none'
          }}>
            <InputLabel>
              BACKGROUND
            </InputLabel>
            <ColorPicker color={this.state.backgroundColor} element={this.props.settingsPanel.type + '_BACKGROUND'}/>
          </InputWrapper>
        </SettingsContentWrap>
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
    fetchFonts: () => dispatch({type: "LOAD_FONTS", payload: axios('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB8mBlgFY3rx_1xc2KXQEptAf0Nudt2HkA&sort=popularity')}),
    updateFonts: (payload, element) => dispatch({
      type: 'UPDATE_FONT_' + element,
      payload: payload
    }),
    updateFontsSize: (payload, element) => dispatch({
      type: 'UPDATE_FONT_SIZE_' + element,
      payload: payload
    }),
    updateLineHeight: (payload, element) => dispatch({
      type: 'UPDATE_LINE_HEIGHT_' + element,
      payload: payload
    }),
    updateFontWeight: (payload, element) => dispatch({
      type: 'UPDATE_FONT_WEIGHT_' + element,
      payload: payload.value
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel)
