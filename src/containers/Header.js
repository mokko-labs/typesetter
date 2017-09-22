import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Logo, DeviceControls } from '../components';


const HeaderContainer = styled.section`
  padding: 15px 40px;
  text-align: center;
  display: flex;
  background: white;
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
  display:inline-block;
  padding: 15px 30px;
  border-radius: 10px;
  outline: 0;
  background-color: #F44336;
  background-image: linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%);
  color:white;
  border:none;
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: sans-serif;
  min-width: 190px;
  text-align: center;
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

  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
