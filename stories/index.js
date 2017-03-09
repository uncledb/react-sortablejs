import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Simple from './Simple';

// abc
storiesOf('Sortable', module)
  .add('simple', () => (
    <Simple log={action('move')} />
  ));