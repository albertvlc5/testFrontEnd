import { useCallback, useEffect, useState } from 'react';

import CoreService from '../../../../CoreService';
import { requestErrorException } from '../../../../utils/exceptions';
import { IDeductibleTransformed } from './interfaces/deductible.interface';
import { IPerkTransformed } from './interfaces/perk.interface';
import { getDeductibles } from './services/deductible.service';
import { getPerks } from './services/perks.service';

interface HomeRequestsHook {
  retrieveData: () => void;
  isLoading: boolean;
  hasError: boolean;
  perks: IPerkTransformed | undefined;
  deductible: IDeductibleTransformed | undefined;
}

export const useHomeRequests = (): HomeRequestsHook => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [perks, setPerks] = useState<IPerkTransformed>();
  const [deductible, setDeductible] = useState<IDeductibleTransformed>();

  const retrieveData = useCallback(() => {
    setIsLoading(true);
    Promise.all([getPerks(), getDeductibles()]).then(
      ([perksResponse, deductibleResponse]) => {
        setPerks(perksResponse);
        setDeductible(deductibleResponse);
        setIsLoading(false);
        setHasError(false);
      },
      (error) => {
        setHasError(true);
        setIsLoading(false);
        const { logging } = CoreService.getInstanceV1();
        logging.logException(
          requestErrorException({
            context: 'getPerksAndDeductible',
            status: error.status,
            message: error.message,
            payload: error.payload,
          }),
        );
      },
    );
  }, []);

  useEffect(() => {
    retrieveData();
  }, [retrieveData]);

  return { retrieveData, isLoading, hasError, perks, deductible };
};
