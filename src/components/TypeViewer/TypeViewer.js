import React, { Component, } from 'react';
import styled from 'styled-components';


// Google fonts API
// https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB8mBlgFY3rx_1xc2KXQEptAf0Nudt2HkA
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
  font-family: sarif;
  font-size: 50px;
  margin:0 0 30px 0;
  font-weight: bold;
  color: ${(props)=>props.primaryColor};
`;

const H2 = styled.h2 `
  font-family: sarif;
  margin:0 0 30px 0;
  font-size: 40px;
  font-weight: bold;
  color: ${(props)=>props.primaryColor};
`;

const P = styled.p `
  font-family: sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin:0 0 50px 0;
  color: ${(props)=>props.primaryColor};
`;



class TypeViewer extends Component {

  render() {
    const { textColor, primaryColor, ...props } = this.props;

    return (
      <TypeViewerContainer>
        <H1>H1 - Main Heading</H1>
        <P>Welcome to The Type Nugget Beta - the online typesetting tool that will eventually make all of your online typesetting dreams come true. Configure some properties in the panel on the right and it’ll change this preview text live in browser (also go ahead and type in these paragraphs; it’s all content-editable).

        Click ‘Generate Code’ to generate a tidy, accessible CSS stylesheet that you can implement with zero fiddling. Spending less time manually coding and more time swiftly creating hella fine web type painlessly via a pleasant user interface? I don’t know about you, but I am all about that life.
        Create a free account and This is the Link you generate, so when you login you can pick up where you left off.</P>
      <H2>H2 - The spectacle before us was indeed sublime</H2>
        <P>Welcome to The Type Nugget Beta - the online typesetting tool that will eventually make all of your online typesetting dreams come true. Configure some properties in the panel on the right and it’ll change this preview text live in browser (also go ahead and type in these paragraphs; it’s all content-editable).

        Click ‘Generate Code’ to generate a tidy, accessible CSS stylesheet that you can implement with zero fiddling. Spending less time manually coding and more time swiftly creating hella fine web type painlessly via a pleasant user interface? I don’t know about you, but I am all about that life.
        Create a free account and This is the Link you generate, so when you login you can pick up where you left off.</P>
      </TypeViewerContainer>
    );
  }
}

export default TypeViewer;
