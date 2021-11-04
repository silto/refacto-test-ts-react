import domainsReducer from "./reducer";
import { receiveDomains } from "./actions";
import { DomainsState } from "./types";

describe('reducers', () => {
  describe('domains', () => {
    it('should initialize to an object with empty list of domains', () => {
      const unknownAction: any = {}
      const newState = domainsReducer(undefined, unknownAction);

      expect(newState).toEqual({
        rawDomains: [],
      })
    });

    it('should store the domains', () => {
      const oldState: DomainsState = {
        rawDomains: [],
      };
      const action = receiveDomains(['US_TEST-SUBTEST', 'UK_TEST-SUBTEST2'])
      const newState = domainsReducer(oldState, action);

      expect(newState).toEqual({
        rawDomains: ['US_TEST-SUBTEST', 'UK_TEST-SUBTEST2'],
      })
    });
  })
})
