import React from 'react';

import CoreService from '../../CoreService';
import { formatException } from '../../utils/logging';
import { EXCEPTIONS } from '../../utils/logging/constants';

export class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error): void {
    CoreService.getInstanceV1().logging.logException(
      formatException({
        exceptionName: EXCEPTIONS.EXCEPTION_DEFAULT.NAME,
        context: error.message,
      }),
    );
  }
  render() {
    return this.props.children;
  }
}
