import {
  getDomains,
  getCountries,
  getClassifications,
  getSubClassifications,
} from "./selectors";
import { AppState } from "../store";


describe('selectors', () => {
  const state: AppState = {
    domains: {
      rawDomains: [
        'SU_PE-RTE',
        'ST_TE-STT'
      ],
      countries: ['SU', 'ST'],
      classifications: ['PE', 'TE'],
      subClassifications: ['RTE', 'STT'],
    }
  }

  describe('getDomains', () => {
    // This describe must be left untouched, this selector is used on other parts of the application.
    it('should return the domains', () => {
      const domains = getDomains(state);

      expect(domains).toEqual([
        'SU_PE-RTE',
        'ST_TE-STT'
      ])
    })
  })
  describe('getCountries', () => {
    it('should return the countries extracted form the domains', () => {
      const countries = getCountries(state);

      expect(countries).toEqual(['SU', 'ST'])
    })
  })
  describe('getClassifications', () => {
    it('should return the classifications extracted form the domains', () => {
      const classifications = getClassifications(state);

      expect(classifications).toEqual(['PE', 'TE'])
    })
  })
  describe('getSubClassifications', () => {
    it('should return the subclassifications extracted form the domains', () => {
      const subClassifications = getSubClassifications(state);

      expect(subClassifications).toEqual(['RTE', 'STT'])
    })
  })
})
