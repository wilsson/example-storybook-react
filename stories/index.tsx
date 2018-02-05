import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';

import * as readme from "../src/components/button/readme.md";
import { withReadme } from 'storybook-readme';

storiesOf('Button', module)
  .add('Default', withReadme(['assada'], () => {
    return <Button>boton</Button>;
  }));