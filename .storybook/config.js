/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  addonPanelInRight: true
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);