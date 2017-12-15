import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { DeviceControls } from '../../components/Common';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles';
import CopyCode from './CopyCode';

const HeaderContainer = styled.section`
  padding: 15px 40px;
  text-align: center;
  display: flex;
  background: white;
  position: fixed;
  z-index: 10;
  left:0;
  top:70px;
  width:100%;
  font-size: 16px;
  line-height: normal;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 10px 1px rgba(43, 43, 43, 0.07);

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;
const PrimaryButton = styled.button`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 49px;
  outline: 0;
  background-color: #EE4761;
  color: white;
  border: none;
  font-size: 14px;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: sans-serif;
  min-width: 190px;
  margin-left: 20px;
  text-align: center;
  box-shadow: 0px 2px 15px 0px rgba(47, 24, 24, 0.27);
  min-width: 220px;
`;
const SecondaryButton = styled.button`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 49px;
  outline: 0;
  background-color: #909090;
  color: white;
  border: none;
  font-size: 14px;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: sans-serif;
  min-width: 190px;
  text-align: center;
  box-shadow: 0px 2px 15px 0px rgba(47, 24, 24, 0.27);
  min-width: 220px;
`;

const Sidebar = styled.div`
  position:fixed;
  right:0;
  height:100%;
  top:0;
  background: rgba(255, 255, 255, 0.95);
  width: 100%;
  max-width: 800px;
  font-size: 12px;
  z-index: 90;
  transform: translate(${ (props) => props.open ? '0' : '100%'}, 0%);
  -webkit-transition: all 500ms cubic-bezier(0.375, 0.460, 0.095, 1); /* older webkit */
  -webkit-transition: all 500ms cubic-bezier(0.375, 0.460, 0.095, 1.265);
     -moz-transition: all 500ms cubic-bezier(0.375, 0.460, 0.095, 1.265);
       -o-transition: all 500ms cubic-bezier(0.375, 0.460, 0.095, 1.265);
          transition: all 500ms cubic-bezier(0.375, 0.460, 0.095, 1.265); /* custom */

  -webkit-transition-timing-function: cubic-bezier(0.375, 0.460, 0.095, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(0.375, 0.460, 0.095, 1.265);
     -moz-transition-timing-function: cubic-bezier(0.375, 0.460, 0.095, 1.265);
       -o-transition-timing-function: cubic-bezier(0.375, 0.460, 0.095, 1.265);
          transition-timing-function: cubic-bezier(0.375, 0.460, 0.095, 1.265); /* custom */
  box-shadow: 0 -20px 20px rgba(0, 0, 0, 0.12);
  padding: 50px 60px;
`;

const CloseButton = styled.span`
  position: absolute;
  cursor: pointer;
  right: 32px;
  display: inline-block;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;


class HeaderApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sidebarVisible: false,
      code: 'initialCodeString'
    };
  }



  toggleSidebar = (e) => {
    const code = CopyCode(this.props.baseConfig, this.props.h1Config, this.props.h2Config, this.props.h3Config, this.props.h4Config, this.props.h5Config, this.props.h6Config, this.props.paragraphConfig);
    this.setState({
      sidebarVisible: !this.state.sidebarVisible,
      code: code
    });
  }

  toggleThemebar = (e) => {
    this.setState({
      themeBarVisible: !this.state.themeBarVisible
    });
  }

  downloadFile = (filename) => {
      const fileContents = CopyCode(this.props.baseConfig, this.props.h1Config, this.props.h2Config, this.props.h3Config, this.props.h4Config, this.props.h5Config, this.props.h6Config, this.props.paragraphConfig);
      var pom = document.createElement('a');
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContents));
      pom.setAttribute('download', filename);
      if (document.createEvent) {
          var event = document.createEvent('MouseEvents');
          event.initEvent('click', true, true);
          pom.dispatchEvent(event);
      }
      else {
          pom.click();
      }
  }

  render() {
    return (
      <div>

      <HeaderContainer>
        <h2 style={{ fontSize: '26px', margin:0 }}>Your Typography Playground</h2>
        <DeviceControls />
        <div>
          <SecondaryButton  onClick={ () => this.toggleThemebar() }>Browse Themes</SecondaryButton>
          <PrimaryButton  onClick={ () => this.toggleSidebar() }>Grab Your CSS</PrimaryButton>
        </div>
      </HeaderContainer>

      <Sidebar open={this.state.sidebarVisible}>
        <CloseButton  onClick={ () => this.toggleSidebar() } />
        <h2 style={{ fontSize: '32px' }}>Copy Your CSS</h2>
        <SyntaxHighlighter language='css' wrapLines={true} style={tomorrowNight}>{this.state.code}</SyntaxHighlighter>
        <br />
        <PrimaryButton onClick={ () => this.downloadFile('typesetter.css') } style={{ marginLeft: 0 }}>Download File</PrimaryButton>
      </Sidebar>
      </div>
    )
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
    paragraphConfig: state.paragraphConfig
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp)
