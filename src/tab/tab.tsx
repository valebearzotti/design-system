import React from 'react';
import styled from 'styled-components';

import { TabProps } from './tab.types';

const TabContainer = styled.div<{ active?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 8px 16px;
    background-color: ${({ active }) => (active ? '#DEEBFF' : 'transparent')};
    color: ${({ active }) => (active ? '#0052CC' : '#4F4F4F')};
    border-bottom: ${({ active }) => (active ? '2px solid #0052CC' : 'none')};
    font-family: 'Inter', sans-serif;
    width: fit-content;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        color: #0052cc;
        background-color: #DEEBFF;
    }
`;

const Tab = ({
    label,
    active,
    onClick,
}: TabProps): JSX.Element => {
    return (
        <TabContainer active={active} onClick={onClick}>
        {label}
        </TabContainer>
    );
};

export default Tab;
