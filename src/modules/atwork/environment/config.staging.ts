const url_base = 'https://staging.creditas.com';
const payroll_url_base = 'https://payroll-legacy.stg.creditas.io';
const store_url_base = 'https://marketplace.stg.creditas.io';
export default {
  ATWORK: {
    API_URL: 'https://kong.stg.creditas.io/atwork',
    PAYROLL_PRIVATE_URL: `${payroll_url_base}/consignado/dashboard?scrollTo=payroll&utm_source=app-creditas&mobile-app=header-global,breadcrumbs,section-footer-homepage`,
    SALARY_ADVANCE_URL: `${payroll_url_base}/consignado/dashboard?scrollTo=salaryAdvance&utm_source=app-creditas&mobile-app=header-global,breadcrumbs,section-footer-homepage`,
    PAYROLL_DASHBOARD_URL: `${payroll_url_base}/consignado/dashboard?utm_source=app-creditas&mobile-app=css-8st4m3,css-qaahup`,
    STORE_URL: `${store_url_base}/store?utm_source=app-creditas&mobile-app=Header,Footer`,
    ATWORK_URL: `${url_base}/beneficios?utm_source=app-creditas&mobile-app=header-global,breadcrumbs,section-footer-homepage`,
  },
};
