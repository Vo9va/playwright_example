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
        reportPortalHelper.logInfo(`test, ${res.statusCode}`)
        return res;
      })
      .catch((err) => {
        reportPortalHelper.logInfo(`fail`)
        return err.response._body;
      });
  }

  async logoutCustomer() {
    return await agent
      .post(`https://api.stage-capitalix.com/auth/logout`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response._body;
      });
  }

  async createCustomer(customer, params = {}) {
    return await agent
      .post(`https://api.stage-capitalix.com/customers`)
      .send({ ...customer, ...params })
      .set(constants.HEADER.NAME, constants.HEADER.VALUE)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response._body;
      });
  }
}

export const apiHelpers = new ApiHelpers();
