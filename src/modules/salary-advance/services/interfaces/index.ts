import { IV1Response } from '@creditas/mobile-core-api';

interface ClientFlow {
  flow: 'WEBVIEW' | 'NATIVE';
}

export interface ClientFlowResponse extends IV1Response {
  bodyJson: ClientFlow;
}
