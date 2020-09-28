import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paper, PaperProps } from './Paper';

export default {
  title: 'Example/Paper',
  component: Paper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<PaperProps> = (args) => <Paper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Paper',
};