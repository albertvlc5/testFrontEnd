import { IV1Response } from '@creditas/mobile-core-api';
import CoreService from '../../../../CoreService';
import { Config } from '../../../../ConfigEnvironment';

export interface GraphqlBody {
  operationName: string;
  variables: { [key: string]: any };
  query: string;
}

export const graphqlRequest = (body: GraphqlBody): Promise<IV1Response> => {
  const { session } = CoreService.getInstanceV1();
  return session.authenticatedRequest({
    headers: {
      'Content-Type': 'application/json',
    },
    path: Config.SALARY_ADVANCE.PAYROLL_BFF_URL,
    method: 'POST',
    body: JSON.stringify(body),
  });
};
