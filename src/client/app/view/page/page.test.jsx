/* eslint-disable no-undef */
import React from 'react';
import { shallow } from '../../../../enzyme';

import Page from './page';

describe('List tests', () => {

  it('renders', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.find('.heading')).toBeDefined();
  });

});