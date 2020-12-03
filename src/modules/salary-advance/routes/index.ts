import { NavigationRouteConfigMap } from 'react-navigation';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {
  RequestConfirmationScreen,
  SpinnerInterceptorScreen,
  ValuePreviewConfirmationScreen,
  ValueRequestScreen,
  WebviewScreen,
} from './stacks';

const DEFAULT_MODULE_NAME = 'module/salary-advance';

export const SalaryAdvanceRoutes = {
  SALARY_ADVANCE_VALUE_REQUEST: `${DEFAULT_MODULE_NAME}/value-request`,
  SALARY_ADVANCE_VALUE_PREVIEW_CONFIRMATION: `${DEFAULT_MODULE_NAME}/value-preview-confirmation`,
  SALARY_ADVANCE_REQUEST_CONFIRMATION: `${DEFAULT_MODULE_NAME}/request-confirmation`,
  SALARY_ADVANCE_SPINNER_INTERCEPTOR: `${DEFAULT_MODULE_NAME}/spinner-interceptor`,
  SALARY_ADVANCE_WEBVIEW: `${DEFAULT_MODULE_NAME}/webview`,
};

export const SalaryAdvanceStack: NavigationRouteConfigMap<
  StackNavigationOptions,
  StackNavigationProp
> = {
  [SalaryAdvanceRoutes.SALARY_ADVANCE_WEBVIEW]: WebviewScreen,
  [SalaryAdvanceRoutes.SALARY_ADVANCE_SPINNER_INTERCEPTOR]: SpinnerInterceptorScreen,
  [SalaryAdvanceRoutes.SALARY_ADVANCE_VALUE_REQUEST]: ValueRequestScreen,
  [SalaryAdvanceRoutes.SALARY_ADVANCE_VALUE_PREVIEW_CONFIRMATION]: ValuePreviewConfirmationScreen,
  [SalaryAdvanceRoutes.SALARY_ADVANCE_REQUEST_CONFIRMATION]: RequestConfirmationScreen,
};
