import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import Checkbox from "../checkbox/checkbox";
import { CheckboxProps } from '../checkbox/checkbox.types';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        id: { control: 'text' },
        label: { control: 'text' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onChange: { action: 'clicked' },
    },
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return <Checkbox {...args} checked={isChecked} onChange={handleCheckboxChange} />;
};

export const Default = Template.bind({});
Default.args = {
    id: 'checkbox',
    label: 'Checkbox label',
    checked: false,
    disabled: false,
};
