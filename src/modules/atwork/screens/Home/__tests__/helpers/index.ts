import { IV1Response } from '@creditas/mobile-core-api';

import CoreService from '../../../../../../CoreService';
import { IDeductible } from '../../interfaces/deductible.interface';
import { IPerk } from '../../interfaces/perk.interface';

export const authenticatedSuccessRequestMock = (
  perk: IPerk[],
  deductible: IDeductible[],
) => {
  jest
    .spyOn(CoreService.getInstanceV1().session, 'authenticatedRequest')
    .mockImplementationOnce(() =>
      Promise.resolve({
        statusCode: 200,
        body: null,
        bodyJson: perk,
        headers: {},
        ok: true,
      } as IV1Response),
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        statusCode: 200,
        body: null,
        bodyJson: deductible,
        headers: {},
        ok: true,
      } as IV1Response),
    );
};

export const rejectObject = {
  status: 400,
  message: 'error making a request',
  payload: { body: 'bodyJson' },
};

export const authenticatedFailedRequestMock = () => {
  jest
    .spyOn(CoreService.getInstanceV1().session, 'authenticatedRequest')
    .mockImplementation(() => Promise.reject(rejectObject));
};
