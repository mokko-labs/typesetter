import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Logo, DeviceControls } from '../components/Common';


const HeaderContainer = styled.section`
  padding: 15px 40px;
  text-align: center;
  display: flex;
  background: white;
  position: fixed;
  z-index: 10;
  left:0;
  top:0;
  width:100%;

  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 10px 1px rgba(43, 43, 43, 0.07);

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.span`
  display:inline-block;
  margin-top: 5px;
`;
const GenerateButton = styled.button`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 49px;
  outline: 0;
  background-color: #F44336;
  background-image: linear-gradient( 135deg,#f7325f 10%,#ff5970 100%);
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

class Header extends Component {

  render() {
    return (
      <HeaderContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <DeviceControls />
        <GenerateButton>Generate CSS</GenerateButton>
      </HeaderContainer>
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


export default connect(mapStateToProps, mapDispatchToProps)(Header)
