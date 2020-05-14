import React from 'react';
import './HomeTab.css';

export default function HomeTab(props) {
    const {tabList, activeTabId, setActiveTabId} = props;
    return (
        <ul className="tab-list">
            {
                tabList.map(item => {
                    if (item.id === activeTabId) {
                        return <li className="tab-item tab-item-active" key={item.id}>{item.name}</li>
                    }
                    return <li className="tab-item" key={item.id} onClick={() => setActiveTabId(item.id)}>{item.name}</li>
                })
            }
        </ul>
    );
}