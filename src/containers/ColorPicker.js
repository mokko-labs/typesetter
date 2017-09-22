import React, { Component, } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import { SketchPicker } from 'react-color';


const PickerWrapper = styled.span`
  display:inline-block;
  position: relative;
`;

const PickerButton = styled.span`
  width:28px;
  height: 28px;
  display: inline-block;
  border-radius: 50%;
  border:1px solid #d2d2d2;
  vertical-align: middle;
`;
const PickerContainer = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translate(-50%, 0);
`;
const PickerLabel = styled.span`
  font-size: 13px;
  display: inline-block;
  margin-left: 10px;
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

  componentWillReceiveNewProps(newProps) {
    if(this.props.color !== newProps.coor) {
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
