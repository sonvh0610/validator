import * as React from 'react';
import styled from 'styled-components';

import IPerformErrorHandler from './IPerformErrorHandler';

const WarningTextStyled = styled.div`
  color: red;
  display: inline-block;
`;

export default class PerformRedText implements IPerformErrorHandler {
  public perform(error: string) {
    return (
      <WarningTextStyled>{error}</WarningTextStyled>
    );
  }
}