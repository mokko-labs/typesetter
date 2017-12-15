import React, { Component, } from 'react';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom';

import styled from 'styled-components';
import { Logo } from '../components/Common';

const HeaderContainer = styled.header`
  padding: 0px 40px;
  height:70px;
  text-align: center;
  display: flex;
  background: white;
  position: fixed;
  z-index: 10;
  left:0;
  top:0;
  width:100%;
  font-size: 16px;
  line-height: normal;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 0px 0px rgba(43, 43, 43, 0.15);
  -moz-box-shadow: 0px 1px 0px 0px rgba(43, 43, 43, 0.15);

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;
const LogoContainer = styled.span`
  display:inline-block;
  margin-top: 5px;
  img {
    max-height: 30px;
  }
`;
const NavWrapper = styled.nav`
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    font-weight: 400;
    margin-left: 40px;

    a {
      text-decoration: none;
      color:#696969;
    }
  }
`;


class Header extends Component {

  render() {
    return (
      <HeaderContainer>
        <LogoContainer>
          <Link to="/"><Logo /></Link>
        </LogoContainer>
        <NavWrapper>
          <ul>
            <li><Link to="/app">Generator</Link></li>
            <li><Link to="/">Browse Themes</Link></li>
          </ul>
        </NavWrapper>
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
