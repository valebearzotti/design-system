import React from 'react';
import { Meta, Story } from '@storybook/react';

import TextInput from "../textinput/textinput";
import { TextInputProps } from '../textinput/textinput.types';

export default {
    title: 'Components/TextInput',
    component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 'text-input-1',
    name: 'text-input-1',
    label: 'Enter your name',
    placeholder: 'e.g. John Doe',
};

export const WithError = Template.bind({});
WithError.args = {
    ...Default.args,
    error: 'Name is required',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    ...Default.args,
    type: 'password',
    label: 'Enter your password',
    placeholder: '********',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    ...Default.args,
    type: 'email',
    label: 'Enter your email',
    placeholder: 'example@mail.com',
};
