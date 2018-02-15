import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme, withDocs } from 'storybook-readme';

import { Button } from '../src/components/button';

//docs button
import * as readme from "./ButtonReadme.md";
import * as doc from './ButtonDoc.md';

storiesOf('Button', module)
  .addDecorator(withDocs(doc))
  .addDecorator(withReadme(readme))
  .add('Default', () => <Button>Hello Button</Button>)

storiesOf('Button', module)
  .addDecorator(withDocs(doc))
  .addDecorator(withReadme(readme))
  .add('Primary', () => <Button primary>Success Button</Button>)

storiesOf('Button', module)
  .addDecorator(withDocs(doc))
  .addDecorator(withReadme(readme))
  .add('Alert', () => <Button alert>Alert Button</Button>)

storiesOf('Button', module)
  .addDecorator(withDocs(doc))
  .addDecorator(withReadme(readme))
  .add('Danger', () => <Button danger>Danger Button</Button>)