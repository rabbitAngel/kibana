/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import euiLightVars from '@elastic/eui/dist/eui_theme_light.json';

import { RoundedBadge } from './rounded_badge';

describe('RoundedBadge', () => {
  test('it renders "and" when "type" is "and"', () => {
    const wrapper = mount(
      <ThemeProvider theme={() => ({ eui: euiLightVars, darkMode: false })}>
        <RoundedBadge type="and" />
      </ThemeProvider>
    );

    expect(wrapper.find('[data-test-subj="and-or-badge"]').at(0).text()).toEqual('AND');
  });

  test('it renders "or" when "type" is "or"', () => {
    const wrapper = mount(
      <ThemeProvider theme={() => ({ eui: euiLightVars, darkMode: false })}>
        <RoundedBadge type="or" />
      </ThemeProvider>
    );

    expect(wrapper.find('[data-test-subj="and-or-badge"]').at(0).text()).toEqual('OR');
  });
});
