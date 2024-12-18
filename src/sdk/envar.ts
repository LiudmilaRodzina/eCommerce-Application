interface EconEnv {
  CTP_PROJECT_KEY: string;
  CTP_CLIENT_SECRET: string;
  CTP_CLIENT_ID: string;
  CTP_AUTH_URL: string;
  CTP_API_URL: string;
  CTP_SCOPES: string;
}

export const Env: EconEnv = {
  CTP_PROJECT_KEY: 'rss-project-241217',
  CTP_CLIENT_SECRET: 'Vd-wfCrP0vYwt0YcNHRH1lj3Qxe41tP7',
  CTP_CLIENT_ID: '2vjhI_hfrBcipF6hUk-uZ8zW',
  CTP_AUTH_URL: 'https://auth.us-central1.gcp.commercetools.com',
  CTP_API_URL: 'https://api.us-central1.gcp.commercetools.com',
  CTP_SCOPES: 'manage_project:rss-project-241217',
};
