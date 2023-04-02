import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Tabs from "../tabs/tabs"
import { TabsProps } from "../tabs/tabs.types";
import Tab from '../tab/tab';

export default {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {
        tabs: { control: 'array' },
    },
} as Meta;

const Template: Story<TabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
        setActiveTab(index);
  };

  return (
    <Tabs {...args}>
        <Tab label="Tab 1" active={activeTab === 0} onClick={() => handleTabClick(0)} />
        <Tab label="Tab 2" active={activeTab === 1} onClick={() => handleTabClick(1)} />
        <Tab label="Tab 3" active={activeTab === 2} onClick={() => handleTabClick(2)} />
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {
    tabs: [
        { label: 'Tab 1', content: 'Tab 1 content' },
        { label: 'Tab 2', content: 'Tab 2 content' },
        { label: 'Tab 3', content: 'Tab 3 content' },
    ],
};
