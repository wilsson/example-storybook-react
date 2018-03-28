/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  addonPanelInRight: true
});

const req = require.context('../stories/', true, /[$storie]+.\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);