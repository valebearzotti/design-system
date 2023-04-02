import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import RadioButton from '../radiobutton/radiobutton';
import { RadioButtonProps } from '../radiobutton/radiobutton.types';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
        id: { control: 'text' },
        label: { control: 'text' },
        value: { control: 'text' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onChange: { action: 'clicked' },
    },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleRadioChange = () => {
        setIsChecked(!isChecked);
    };

    return <RadioButton {...args} checked={isChecked} onChange={handleRadioChange} />;
};

export const Default = Template.bind({});
Default.args = {
    id: 'radio',
    label: 'Radio button label',
    value: 'radioButtonValue',
    checked: false,
    disabled: false,
};
