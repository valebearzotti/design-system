import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import Tab from "../tab/tab";
import { TabProps } from "../tab/tab.types";

export default {
  component: Tab,
  title: 'Components/Tab',
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    onClick: { action: 'clicked' },
    },
} as Meta;

const Template: Story<TabProps> = (args) => {
    const [active, setActive] = useState(args.active);

    return (
        <Tab
            {...args}
            active={active}
            onClick={() => setActive(!active)}
        />
    );

}

export const Default = Template.bind({});
Default.args = {
    label: 'Tab 1',
    active: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
    label: 'Tab 2',
    active: false,
};