const url_base = 'https://www.creditas.com';
const app_url_base = 'https://app.creditas.com';
export default {
  ATWORK: {
    API_URL: 'https://kong.prod.creditas.io/atwork',
    PAYROLL_PRIVATE_URL: `${app_url_base}/consignado/dashboard?scrollTo=payroll&utm_source=app-creditas&mobile-app=header-global,breadcrumbs,section-footer-homepage`,
    SALARY_ADVANCE_URL: `${app_url_base}/consignado/dashboard?scrollTo=salaryAdvance&utm_source=app-creditas&mobile-app=header-global,breadcrumbs,section-footer-homepage`,
    PAYROLL_DASHBOARD_URL: `${app_url_base}/consignado/dashboard?utm_source=app-creditas&mobile-app=css-8st4m3,css-qaahup`,
    STORE_URL: `${url_base}/store?utm_source=app-creditas&mobile-app=Header,Footer`,
    ATWORK_URL: `${url_base}/beneficios?utm_source=app-creditas&mobile-app=header-global,breadcrumbs,section-footer-homepage`,
  },
};
