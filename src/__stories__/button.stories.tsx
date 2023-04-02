import React from 'react';
import { StoryFn, Meta } from '@storybook/react'

import Button from "../button/button";
import { ButtonProps } from '../button/button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Primary button variants
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Primary Small',
  variant: 'primary',
  size: 'small',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  children: 'Primary Medium',
  variant: 'primary',
  size: 'medium',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: 'Primary Large',
  variant: 'primary',
  size: 'large',
};

// Secondary button variants
export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  children: 'Secondary Small',
  variant: 'secondary',
  size: 'small',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  children: 'Secondary Medium',
  variant: 'secondary',
  size: 'medium',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  children: 'Secondary Large',
  variant: 'secondary',
  size: 'large',
};

// Tertiary button variants
export const TertiarySmall = Template.bind({});
TertiarySmall.args = {
  children: 'Tertiary Small',
  variant: 'tertiary',
  size: 'small',
};

export const TertiaryMedium = Template.bind({});
TertiaryMedium.args = {
  children: 'Tertiary Medium',
  variant: 'tertiary',
  size: 'medium',
};

export const TertiaryLarge = Template.bind({});
TertiaryLarge.args = {
  children: 'Tertiary Large',
  variant: 'tertiary',
  size: 'large',
};
