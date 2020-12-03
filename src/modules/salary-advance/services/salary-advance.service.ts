import { graphqlRequest, GraphqlBody } from './graphql';
import { ClientFlowResponse } from './interfaces';

const getClientFlow = (clientId: string): Promise<ClientFlowResponse> => {
  const body: GraphqlBody = {
    operationName: 'SalaryAdvanceClientFlow',
    variables: { clientId },
    query: `query SalaryAdvanceClientFlow($clientId: Float!) {
        salaryAdvanceClientFlow(clientId: $clientId) {
          flow
        }
      }`,
  };
  return graphqlRequest(body) as Promise<ClientFlowResponse>;
};

export { getClientFlow };
