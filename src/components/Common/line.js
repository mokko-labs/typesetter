import React, { Component, } from 'react';
import styled from 'styled-components';


const LineWrap = styled.span `
  height: 1px;
  width: 100%;
  display: block;
  opacity: 0.5
`;

class Line extends Component {

  render() {
    const {color, ...props} = this.props;

    return <LineWrap style={{ backgroundColor: color }} />;
  }
}

export default Line;
