import React, { useState } from 'react';
import styled from 'styled-components';

import Tab from '../tab/tab';
import { TabProps } from '../tab/tab.types';
import { TabsProps } from './tabs.types';

const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TabsHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #DEDEDE;
`;

const TabsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    font-family: 'Inter', sans-serif;
`;

const Tabs = ({ tabs }: TabsProps): JSX.Element => {
    const [activeTab, setActiveTab] = useState<TabProps>(tabs[0]);

    const handleTabClick = (tab: TabProps) => {
        setActiveTab(tab);
    };

    return (
        <TabsContainer>
            <TabsHeader>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        active={tab.label === activeTab.label}
                        onClick={() => handleTabClick(tab)}
                    />
                ))}
            </TabsHeader>
            <TabsContent>
                {activeTab.content}
            </TabsContent>
        </TabsContainer>
    );
};

export default Tabs;
