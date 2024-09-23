import * as constants from '../test-data/constants';
import agent from '../helpers/agent.helper';
import { reportPortalHelper } from './reportPortal.helper';

class ApiHelpers {
  async loginCustomer(customer, params = {}) {
    return await agent
      .post(`https://api.stage-capitalix.com/auth/login`)
      .send({ ...customer, ...params })
      .set(constants.HEADER.NAME, constants.HEADER.VALUE)
      .then((res) => {
        reportPortalHelper.logInfo(`loginCustomer, ${JSON.stringify(res.body)}`)
        return res;
      })
      .catch((err) => {
        reportPortalHelper.logInfo(`loginCustomer, ${err}`)
        return err.response._body;
      });
  }

  async logoutCustomer() {
    return await agent
      .post(`https://api.stage-capitalix.com/auth/logout`)
      .then((res) => {
        reportPortalHelper.logInfo(`logoutCustomer, ${JSON.stringify(res.body)}`)
        return res;
      })
      .catch((err) => {
        reportPortalHelper.logInfo(`logoutCustomer, ${err}`)
        return err.response._body;
      });
  }

  async createCustomer(customer, params = {}) {
    return await agent
      .post(`https://api.stage-capitalix.com/customers`)
      .send({ ...customer, ...params })
      .set(constants.HEADER.NAME, constants.HEADER.VALUE)
      .then((res) => {
        reportPortalHelper.logInfo(`createCustomer, ${JSON.stringify(res.body)}`)
        return res;
      })
      .catch((err) => {
        reportPortalHelper.logInfo(`createCustomer, ${err}`)
        return err.response._body;
      });
  }
}

export const apiHelpers = new ApiHelpers();
