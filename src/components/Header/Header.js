import React from 'react';
import styled from 'styled-components';
import logo from './../../assets/logo.svg';

const HeaderContainer = styled.section`
  padding: 20px 40px;
  text-align: center;
  display: flex;
  background: white;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.span`
  display:inline-block;
`;

const Header = () =>
  <HeaderContainer>
    <LogoContainer>
      <img src={logo} />
    </LogoContainer>
  </HeaderContainer>;

export default Header;
