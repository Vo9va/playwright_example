import * as constants from '../test-data/constants';
import {agent} from './agent.helper';
import {reportPortalHelper} from './reportPortal.helper';

class ApiHelpers {
    async loginCustomer(customer: object, params = {}) {
        return agent
            .post(`https://api.stage-capitalix.com/auth/login`)
            .send({...customer, ...params})
            .set(constants.HEADER.NAME, constants.HEADER.VALUE)
            .then((res: { body: any; }) => {
                reportPortalHelper.logInfo(`loginCustomer, ${JSON.stringify(res.body)}`)
                return res;
            })
            .catch((err: { response: { _body: any; }; }) => {
                reportPortalHelper.logInfo(`loginCustomer, ${err}`)
                return err.response._body;
            });
    }

    async logoutCustomer() {
        return await agent
            .post(`https://api.stage-capitalix.com/auth/logout`)
            .then((res: { body: any; }) => {
                reportPortalHelper.logInfo(`logoutCustomer, ${JSON.stringify(res.body)}`)
                return res;
            })
            .catch((err: { response: { _body: any; }; }) => {
                reportPortalHelper.logInfo(`logoutCustomer, ${err}`)
                return err.response._body;
            });
    }

    async createCustomer(customer: object, params = {}) {
        return await agent
            .post(`https://api.stage-capitalix.com/customers`)
            .send({...customer, ...params})
            .set(constants.HEADER.NAME, constants.HEADER.VALUE)
            .then((res: { body: any; }) => {
                reportPortalHelper.logInfo(`createCustomer, ${JSON.stringify(res.body)}`)
                return res;
            })
            .catch((err: { response: { _body: any; }; }) => {
                reportPortalHelper.logInfo(`createCustomer, ${err}`)
                return err.response._body;
            });
    }
}

export const apiHelpers = new ApiHelpers();
