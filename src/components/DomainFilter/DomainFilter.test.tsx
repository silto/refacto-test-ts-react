import React from 'react';
import { shallow } from 'enzyme';
import DomainFilter from './DomainFilter.component';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter
        countries={['US', 'UK']}
        classifications={['TEST']}
        subClassifications={['SUBTEST', 'SUBTEST2']}
      />);

      expect(wrapper.find('select')).toHaveLength(3);
      expect(wrapper.find({name: "countries"}).at(0).find('option')).toHaveLength(2);
      expect(wrapper.find({name: "classifications"}).at(0).find('option')).toHaveLength(1);
      expect(wrapper.find({name: "subClassifications"}).at(0).find('option')).toHaveLength(2);
    })
  })
})
