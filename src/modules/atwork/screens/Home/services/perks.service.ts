import { IV1Response } from '@creditas/mobile-core-api';

import { Config } from '../../../../../ConfigEnvironment';
import CoreService from '../../../../../CoreService';
import { IPerk, IPerkTransformed } from '../interfaces/perk.interface';
import { initialPerkTransformed, perkReducer } from './helpers/perk.reducer';

const handleResponse = (response: IV1Response): Promise<IPerkTransformed> => {
  if (response.ok) {
    return Promise.resolve(
      (response.bodyJson as IPerk[]).reduce(
        perkReducer,
        initialPerkTransformed,
      ),
    );
  }
  return Promise.reject({
    status: response.statusCode,
    message: 'error getting perks',
    payload: response.bodyJson,
  });
};

export const getPerks = async (): Promise<IPerkTransformed> => {
  const url = `${Config.ATWORK.API_URL}/perks`;
  const { session } = CoreService.getInstanceV1();
  return session
    .authenticatedRequest({
      path: url,
    })
    .then((res) => handleResponse(res));
};
