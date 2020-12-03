import { IV1Response } from '@creditas/mobile-core-api';

import { Config } from '../../../../../ConfigEnvironment';
import CoreService from '../../../../../CoreService';
import {
  IDeductible,
  IDeductibleTransformed,
} from '../interfaces/deductible.interface';
import {
  deductibleReducer,
  initialDeductibleTransformed,
} from './helpers/deductible.reducer';

const handleResponse = (
  response: IV1Response,
): Promise<IDeductibleTransformed | undefined> => {
  if (response.ok) {
    const deductibles = response.bodyJson as IDeductible[];
    const deductibleResponse =
      deductibles.length > 0
        ? deductibles.reduce(deductibleReducer, initialDeductibleTransformed)
        : undefined;
    return Promise.resolve(deductibleResponse);
  }
  return Promise.reject({
    status: response.statusCode,
    message: 'error getting deductible',
    payload: response.bodyJson,
  });
};

export const getDeductibles = async (): Promise<
  IDeductibleTransformed | undefined
> => {
  const url = `${Config.ATWORK.API_URL}/deductibles`;
  const { session } = CoreService.getInstanceV1();
  return session
    .authenticatedRequest({
      path: url,
    })
    .then((res) => handleResponse(res));
};
