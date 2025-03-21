import React, { useState } from 'react'
import Profile from './Profile'
import Interest from './Interest';
import Settings from './Settings';
import './Tabform.css'


function TabForm() {
    const [activeTab, setActiveTab] = useState(0)
    const tabs = [
        {
            name: "Profile",
            component: Profile
        },
        {
            name: "Interest",
            component: Interest,
        },
        {
            name: "Settings",
            component: Settings,
        },
    ];

    const ActivetabComponent = tabs[activeTab].component;

    return (
        <div>
            <h1>TabForm</h1>
            <div className='headings'>
                {tabs.map((t, ind) => {
                    return (
                        <div className='tab-names' onClick={() => setActiveTab(ind)} key={ind}>
                            {t.name}
                        </div>
                    )
                })}
            </div>
            <div className='tab-body'>
                <ActivetabComponent />
            </div>
        </div>
    )
}

export default TabForm