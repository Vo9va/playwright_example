function getRandomName() {
  return `E2E` + Math.random().toString(36).substring(7);
}

function getRandomEmail() {
  const randomPrefix = 'test' + Math.random().toString(36);
  return `ng_e2e_ui_${randomPrefix}@protonixltd.com`;
}
const customerLead = {
  email: 'default_ng_e2e_ui@test.com',
  mobile: '+4748130055',
  phone: '+4722111111',
  password: '123456Aa@',
  first_name: 'Qa',
  last_name: 'API',
  brand_id: 'CAPITALIX',
  system_id: 'web',
  login_type_id: 'regular',
  country_id: 'NO',
  lang_id: 'en',
  daily_deposit_limit: 100,
  auth_method: 'regular',
  token: 'string',
  campaign_id: 'regular',
  is_test: true,
  tc: 1,
};

function getCustomerLead(params = {}) {
  return {
    ...customerLead,
    first_name: getRandomName(),
    email: getRandomEmail(),
    brand_id: 'CAPITALIX',
    campaign_id: '53',
    ...params,
  };
}
module.exports = {
  getCustomerLead,
};
