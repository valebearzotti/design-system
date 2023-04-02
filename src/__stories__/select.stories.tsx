import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import Select from '../select/select';
import { SelectProps, SelectOption } from '../select/select.types';

export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        options: { control: 'array' },
        value: { control: 'text' },
        onChange: { action: 'changed' },
    },
} as Meta;

const Template: Story<SelectProps> = (args) => {
    const [selectedValue, setSelectedValue] = useState<string>(args.value);

    const handleSelectChange = (option: SelectOption) => {
        setSelectedValue(option.value);
    };

    return <Select {...args} value={selectedValue} onChange={handleSelectChange} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Select a color',
    placeholder: 'Select an option',
    options: [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' },
    ],
};

export const WithError = Template.bind({});
WithError.args = {
    label: 'Select a color',
    placeholder: 'Select an option',
    options: [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' },
    ],
    error: 'Please select an option',
};