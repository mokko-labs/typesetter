import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import 'react-select/dist/react-select.css';

import { H1, H2, H3, H4, H5, H6, Paragraph } from '../components/Typography'

// Google fonts API
// https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB8mBlgFY3rx_1xc2KXQEptAf0Nudt2HkA

const TypeViewWrapper = styled.section`
  max-width:${(props)=>{
    switch (props.activeDevice) {
      case 'DESKTOP':
        return '1100px'
      case 'TABLET':
        return '700px'
      case 'MOBILE':
        return '400px'
      default:
        return '1100px'
    }
  }};
  margin:20px auto;
  transition: 1s max-width ease;
  @media (max-width: 1600px) {
    max-width:1400px;
  }
  @media (max-width: 1300px) {
    max-width:1100px;
  }
`;

const TypeViewerContainer = styled.section `
  padding: 120px 0px 80px 0px;
  text-align: left;
  position: relative;
  z-index: 1;
  display: block;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const BackgroundMask = styled.div`
  position: fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index: 0;
`




class TypeViewer extends Component {

  _updateBaseStyle = (params) => {
    document.body.style.background = params.backgroundColor
    document.body.style.fontSize = params.fontSize + 'em'
    document.body.style.fontFamily = params.fontFamily
    document.body.style.fontWeight = params.fontWeight
    document.body.style.color = params.color
  }

  componentWillReceiveProps = (newProps) => {
    if(this.props.baseConfig !== newProps.baseConfig) {
      this._updateBaseStyle(newProps.baseConfig)
    }
  }


  componentWillMount = () => {
    if(this.props.baseConfig) {
      this._updateBaseStyle(this.props.baseConfig)
    }
  }


  render() {
    const { activeDevice } = this.props;

    return (
      <TypeViewWrapper activeDevice={activeDevice}>
        <TypeViewerContainer>
          <H1 onClick={()=> this.props.changeSettings('H1')} config={this.props.h1Config} >H1 - Generate Base Typography CSS For Your Next Project!</H1>
          <Paragraph onClick={()=> this.props.changeSettings('PARAGRAPH')} config={this.props.paragraphConfig}>
            Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.
            Now led tedious shy lasting females off. Dashwood marianne in of entrance be on wondered possible building. Wondered sociable he carriage in speedily margaret. Up devonshire of he thoroughly insensible alteration. An mr settling occasion insisted distance ladyship so. Not attention say frankness intention out dashwoods now curiosity. Stronger ecstatic as no judgment daughter speedily thoughts. Worse downs nor might she court did nay forth these.
          </Paragraph>
          <H2 onClick={()=> this.props.changeSettings('H2')} config={this.props.h2Config} >H2 - Responsive Support & Easy to Configure. </H2>
          <Paragraph onClick={()=> this.props.changeSettings('PARAGRAPH')} config={this.props.paragraphConfig}>
            Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities.
          </Paragraph>
          <H3 onClick={()=> this.props.changeSettings('H3')} config={this.props.h3Config} >H3 - Choose From 847 Available Google Google Fonts!</H3>
          <Paragraph onClick={()=> this.props.changeSettings('PARAGRAPH')} config={this.props.paragraphConfig}>
            Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so - if you want to sing this way, think of what you'd like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free. La la la la la, la la la la la la la, la la la la la la la, la la la la la la la la la la la la la, so - Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name.
          </Paragraph>
          <H4 onClick={()=> this.props.changeSettings('H4')} config={this.props.h4Config} >H4 - Generate Responsive Typography Using Google Fonts</H4>
          <Paragraph onClick={()=> this.props.changeSettings('PARAGRAPH')} config={this.props.paragraphConfig}>
            Hey there where ya goin', not exactly knowin', who says you have to call just one place home. He's goin' everywhere, B.J. McKay and his best friend Bear. He just keeps on movin', ladies keep improvin', every day is better than the last. New dreams and better scenes, and best of all I don't pay property tax. Rollin' down to Dallas, who's providin' my palace, off to New Orleans or who knows where. Places new and ladies, too, I'm B.J. McKay and this is my best friend Bear.
          </Paragraph>

          <H5 onClick={()=> this.props.changeSettings('H5')} config={this.props.h5Config} >H5 - Generate Responsive Typography Using Google Fonts</H5>
          <Paragraph onClick={()=> this.props.changeSettings('PARAGRAPH')} config={this.props.paragraphConfig}>
            Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.

Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better.
          </Paragraph>

          <H6 onClick={()=> this.props.changeSettings('H6')} config={this.props.h6Config} >H6 - Generate Responsive Typography Using Google Fonts</H6>
          <Paragraph onClick={()=> this.props.changeSettings('PARAGRAPH')} config={this.props.paragraphConfig}>
            Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so - if you want to sing this way, think of what you'd like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free. La la la la la, la la la la la la la, la la la la la la la, la la la la la la la la la la la la la, so - Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name.
          </Paragraph>

        </TypeViewerContainer>

        <BackgroundMask onClick={()=> this.props.changeSettings('BASE')} />
      </TypeViewWrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    activeDevice: state.activeDevice,
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
    changeSettings: (payload) => dispatch({
      type: 'CHANGE_TYPE',
      payload: payload
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TypeViewer)
