import { AppState } from '../store'

export function getDomains(state: AppState): string[] {
  return (state.domains && state.domains.rawDomains) || []
}

export function getCountries(state: AppState): string[] {
  return (state.domains && state.domains.countries) || [];
}

export function getClassifications(state: AppState): string[] {
  return (state.domains && state.domains.classifications) || [];
}

export function getSubClassifications(state: AppState): string[] {
  return (state.domains && state.domains.subClassifications) || [];
}