import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';


// Google fonts API
// https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB8mBlgFY3rx_1xc2KXQEptAf0Nudt2HkA
const TypeViewWrapper = styled.section`
  max-width:${(props)=>{
    switch (props.activeDevice) {
      case 'DESKTOP':
        return '1500px'
      case 'TABLET':
        return '1024px'
      case 'MOBILE':
        return '400px'
      default:
        return '1500px'
    }
  }};
  margin:20px auto;
  transition: 1s all ease;
  @media (max-width: 1600px) {
    max-width:1400px;
  }
  @media (max-width: 1300px) {
    max-width:1100px;
  }
`;

const TypeViewerContainer = styled.section `
  padding: 100px 0px 20px 0px;
  text-align: left;
  display: block;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;


const H1 = styled.h1 `
  font-family: ${(props)=>props.fontFamily};
  font-size: 50px;
  margin:0 0 30px 0;
  font-weight: bold;
  color: ${(props)=>props.primaryColor};
`;

const H2 = styled.h2 `
  font-family: ${(props)=>props.fontFamily};
  margin:0 0 30px 0;
  font-size: 40px;
  font-weight: bold;
  color: ${(props)=>props.primaryColor};
`;

const P = styled.p `
  font-family: ${(props)=>props.fontFamily};
  font-size: 14px;
  line-height: 24px;
  margin:0 0 50px 0;
  color: ${(props)=>props.primaryColor};
`;



class TypeViewer extends Component {

  render() {
    const { activeDevice } = this.props;

    return (
      <TypeViewWrapper activeDevice={activeDevice}>
        <TypeViewerContainer>
          <H1 font={this.props.headerFontFamily} >H1 - Generate Responsive Typography Using Google Fonts</H1>
          <P fontFamily={this.props.normalFontFamily}>Welcome to The Type Nugget Beta - the online typesetting tool that will eventually make all of your online typesetting dreams come true. Configure some properties in the panel on the right and it’ll change this preview text live in browser (also go ahead and type in these paragraphs; it’s all content-editable).

          Click ‘Generate Code’ to generate a tidy, accessible CSS stylesheet that you can implement with zero fiddling. Spending less time manually coding and more time swiftly creating hella fine web type painlessly via a pleasant user interface? I don’t know about you, but I am all about that life.
          Create a free account and This is the Link you generate, so when you login you can pick up where you left off.</P>
        <H2 fontFamily={this.props.headerFontFamily}>H2 - The spectacle before us was indeed sublime</H2>
          <P fontFamily={this.props.normalFontFamily}>Welcome to The Type Nugget Beta - the online typesetting tool that will eventually make all of your online typesetting dreams come true. Configure some properties in the panel on the right and it’ll change this preview text live in browser (also go ahead and type in these paragraphs; it’s all content-editable).

          Click ‘Generate Code’ to generate a tidy, accessible CSS stylesheet that you can implement with zero fiddling. Spending less time manually coding and more time swiftly creating hella fine web type painlessly via a pleasant user interface? I don’t know about you, but I am all about that life.
          Create a free account and This is the Link you generate, so when you login you can pick up where you left off.</P>
        </TypeViewerContainer>
      </TypeViewWrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    activeDevice: state.activeDevice
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TypeViewer)
