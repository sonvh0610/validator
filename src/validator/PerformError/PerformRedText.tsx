import * as React from 'react';
import PerformErrorHandler from './PerformErrorHandler';
import styled from 'styled-components';

const WarningTextStyled = styled.div`
  color: red;
`;

export default class PerformRedText implements PerformErrorHandler {
  perform(error: string) {
    return (
      <WarningTextStyled>{error}</WarningTextStyled>
    );
  }
}