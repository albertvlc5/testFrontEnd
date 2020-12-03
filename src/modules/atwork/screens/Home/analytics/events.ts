import { ItrackingEventsList } from '../interfaces/trackingEvent.interface';

const EVENTS: ItrackingEventsList = {
  GO_TO_BENEFITS: {
    name: 'goto_benefits',
    params: {
      origin: 'atwork',
      type: 'webview',
      destinationUrl: 'https://www.creditas.com/beneficios',
      componentName: 'HeaderGhost',
    },
  },
  GO_TO_DASHBOARD: {
    name: 'goto_dashboard',
    params: {
      origin: 'benefitsStatus',
      type: 'miniapp',
      componentName: 'HeaderGhost',
    },
  },
  GO_TO_SALARY_ADVANCE: {
    name: 'goto_salaryAdvance',
    params: {
      order: '1.0',
      component: '6M',
      origin: 'atwork',
      type: 'webview',
      componentName: 'CardBalance',
      destinationUrl: 'https://app.creditas.com/consignado/dashboard',
    },
  },
  GO_TO_CONSIGNADO_LOAN: {
    name: 'goto_consignadoLoan',
    params: {
      order: '2.0',
      component: '6M',
      componentName: 'CardBalance',
      origin: 'atwork',
      type: 'webview',
      destinationUrl: 'https://app.creditas.com/consignado/dashboard',
    },
  },
  GO_TO_CREDITAS_STORE_LINK: {
    name: 'goto_creditasStore',
    params: {
      order: '2.1',
      component: '6L',
      componentName: 'CardLinks',
      origin: 'atwork',
      type: 'webview',
      destinationUrl: 'https://www.creditas.com/store',
    },
  },
  GO_TO_CONSIGNADO_LOAN_LINK: {
    name: 'goto_consignadoLoan',
    params: {
      order: '2.2',
      component: '6L',
      componentName: 'CardLinks',
      origin: 'atwork',
      type: 'webview',
      destinationUrl: 'https://app.creditas.com/consignado/dashboard',
    },
  },
  GO_TO_DESCONTO_FOLHA: {
    name: 'goto_descontoFolha',
    params: {
      order: '3.0',
      component: '6M',
      origin: 'atwork',
      type: 'webview',
      componentName: 'CardProductManagement',
      destinationUrl: 'https://app.creditas.com/consignado/dashboard',
    },
  },
};

export const componentEvents = {
  header: {
    info: EVENTS.GO_TO_BENEFITS,
    goBack: EVENTS.GO_TO_DASHBOARD,
  },
  salaryAdvance: EVENTS.GO_TO_SALARY_ADVANCE,
  payroll: {
    payrollStoreLink: EVENTS.GO_TO_CREDITAS_STORE_LINK,
    payrollConsignadoLink: EVENTS.GO_TO_CONSIGNADO_LOAN_LINK,
    goToConsignado: EVENTS.GO_TO_CONSIGNADO_LOAN,
  },
  deductible: EVENTS.GO_TO_DESCONTO_FOLHA,
};

export default componentEvents;
