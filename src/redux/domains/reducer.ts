import { DomainsState, DomainsAction, RECEIVE_DOMAINS } from './types'

const initialState: DomainsState = {
  rawDomains: [],
  countries: [],
  classifications: [],
  subClassifications: [],
}

export function domainsReducer(
  state = initialState,
  action: DomainsAction
): DomainsState {
  switch (action.type) {
    case RECEIVE_DOMAINS:
      let newState: DomainsState = {
        rawDomains: action.domains,
        countries: [],
        classifications: [],
        subClassifications: [],
      }
      // return initial state if no input
      if (!action.domains) {
        return newState;
      }
      // parse the input domains to prepare redux state
      // domains should foolow the pattern {country code}_{classification}-{sub classification}
      // so split once with "_" then split the 2nd part with "-"
      // this way the process is resilient to longer/shorter codes
      action.domains.forEach(domain => {
        const countryAndClassificationSplit = domain.split("_");
        const classifAndSubClassifSplit = countryAndClassificationSplit[1] && countryAndClassificationSplit[1].split("-");
        const tmpCountry = countryAndClassificationSplit[0];
        const tmpClassif = classifAndSubClassifSplit[0];
        const tmpSubClassif = classifAndSubClassifSplit[1];
        // in case the domain was malformed, don't bother putting it in the state
        if (!tmpCountry || !tmpClassif || !tmpSubClassif) {
          return;
        }
        if (!newState.countries.some(country => country === tmpCountry)) {
          newState.countries.push(tmpCountry);
        }
        if (!newState.classifications.some(classif => classif === tmpClassif)) {
          newState.classifications.push(tmpClassif);
        }
        if (!newState.subClassifications.some(subClassif => subClassif === tmpSubClassif)) {
          newState.subClassifications.push(tmpSubClassif);
        }
      })
      return newState;
    default:
      return state
  }
}

export default domainsReducer
