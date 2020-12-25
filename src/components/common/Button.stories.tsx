import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import 'styled-components';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  provider: undefined,
  isLoading: false,
  children: 'Button',
};

export const SocialButton = Template.bind({});
SocialButton.args = {
  provider: 'GITHUB',
  isLoading: false,
  children: 'Button',
};
