import React from 'react';
import PropTypes from 'prop-types';

//styles
import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

Grid.prototype = {
  header: PropTypes.string,
};

export default Grid;
