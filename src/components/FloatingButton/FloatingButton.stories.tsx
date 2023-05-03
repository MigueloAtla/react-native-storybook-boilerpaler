// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import FloatingButton from './';

export default {
  title: 'components/FloatingButton',
  component: FloatingButton,
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = args => (
  <FloatingButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  symbol: '',
  higherTop: false,
};
