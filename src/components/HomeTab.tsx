import React from 'react';
import styled from 'styled-components';

const TabList = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    background-color: #f1f1f1;
`;

const TabItem = styled.li`
    line-height: 18px;
    color: #80bd01;
    font-size: 14px;
`;

const TabItemActive = styled(TabItem)`
    padding: 0 10px;
    color: #fff;
    background-color: #80bd01;
    border-radius: 5px;
`;

type HomeTabProps = {
    tabList: Array<any>;
    activeTabId: number;
    setActiveTabId(id: number): void;
}

export default function HomeTab(props: HomeTabProps) {
    const {tabList, activeTabId, setActiveTabId} = props;
    return (
        <TabList>
            {
                tabList.map(item => {
                    if (item.id === activeTabId) {
                        return <TabItemActive key={item.id}>{item.name}</TabItemActive>
                    }
                    return <TabItem key={item.id} onClick={() => setActiveTabId(item.id)}>{item.name}</TabItem>
                })
            }
        </TabList>
    );
}