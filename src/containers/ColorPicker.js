import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import { SketchPicker } from 'react-color';


const PickerWrapper = styled.span`
  display:inline-block;
  position: relative;
  margin-top: 3px;
`;

const PickerButton = styled.span`
  width:28px;
  height: 28px;
  display: inline-block;
  border-radius: 50%;
  border:1px solid #d2d2d2;
  vertical-align: middle;
  box-shadow: inset 0px 0px 8px -1px rgba(0, 0, 0, 0.15);
  border:1px solid rgba(105, 105, 105, 0.23);
`;
const PickerContainer = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 70px;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 0);
`;
const PickerCloseLayer = styled.div`
  content: '';
  position: fixed;
  top:0;
  left:0;
  bottom: 70px;
  opacity: 0;
  width: 100%;
  z-index: 0;
`;
const PickerLabel = styled.span`
  font-size: 13px;
  display: inline-block;
  margin-left: 5px;
  color: #616161;
  min-width: 70px;
  vertical-align: middle;
`;


class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: '#000000',
      visible: false
    };
  }

  componentWillMount() {
    if(this.props.color) {
      this.setState({
        color: this.props.color
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.element !== newProps.element) {
      this.setState({
        visible: false
      });
      this.setState({
        color: newProps.color
      });
    }
  }

  handleColorChange = (e) => {
    this.props.updateColor(this.props.element, e.hex)
    this.setState({
      color: e.hex
    });
  }

  togglePicker = (e) => {
    this.setState({
      visible: !this.state.visible
    });
  }


  render() {
    return (
      <PickerWrapper>
        <PickerContainer style={{display: this.state.visible ? 'block' : 'none'}} >
          <SketchPicker color={ this.state.color } onChange={ this.handleColorChange } />
        </PickerContainer>
        <PickerButton onClick={ () => this.togglePicker() } style={{backgroundColor: this.state.color}} />
        <PickerLabel>
          {this.state.color.toString()}
        </PickerLabel>
        <PickerCloseLayer style={{display: this.state.visible ? 'block' : 'none'}} onClick={ () => this.togglePicker() } />
      </PickerWrapper>
    )
  }
}



const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateColor: (element, color) => dispatch({
        type: "UPDATE_COLOR_"+element,
        payload: color
      })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
