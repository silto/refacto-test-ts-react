import { DomainsState, DomainsAction, RECEIVE_DOMAINS } from './types'

const initialState: DomainsState = {
  rawDomains: [],
}

export function domainsReducer(
  state = initialState,
  action: DomainsAction
): DomainsState {
  switch (action.type) {
    case RECEIVE_DOMAINS:
      return {
        rawDomains: action.domains,
      }
    default:
      return state
  }
}

export default domainsReducer
