import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme, withDocs } from 'storybook-readme';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import styled from 'styled-components';

import { Button } from '../src/components/button';

//docs button
import * as readme from "./ButtonReadme.md";
import * as doc from './ButtonDoc.md';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(doc))
  .addDecorator(withReadme(readme))
  .add('Default', () => {
    return(
      <Button
        primary={boolean('primary', false)}
        alert={boolean('alert', false)}
        danger={boolean('danger', false)} >
          {text('label', 'Hello Im Button')}
        </Button>
    )
  })