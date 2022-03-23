import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SelectTab } from '../../actions/tabs';

export const IteamsTab = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.tabs );
    const { tabs, currentTab } = state;

    const handleSelectTab = (tab) => {
        dispatch( SelectTab( tab.name, tab.routePage ) );
    }

    return (
        <ul>
            {tabs.map(tab => {
              return (
                <li className="Tabs_li">
                    <Link to={tab.routePage}>
                        <button
                            className={currentTab.name == tab.name ? "tab active" : "tab"}
                            onClick={() => handleSelectTab(tab)}
                        >
                            {tab.name}
                        </button>
                    
                    </Link>
                </li>
              );
            })}

        </ul>
    )
}
