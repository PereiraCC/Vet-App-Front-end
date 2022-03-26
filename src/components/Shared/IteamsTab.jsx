import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { DeleteTab, SelectTab } from '../../actions/tabs';

export const IteamsTab = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.tabs );
    const { tabs, currentTab } = state;

    const handleSelectTab = (tab) => {
        dispatch( SelectTab( tab.name, tab.routePage ) );
    }

    const handleDeleteTab = (tab) => {
        dispatch( DeleteTab( tab.name, tab.routePage ) );
    }

    return (
        (tabs.length !== 0) 
            ?
            <ul>
                {tabs.map(tab => {
                return (
                    <li className="Tabs_li" key={tab.name}>

                        <button
                            className={currentTab.name == tab.name ? "tab active" : "tab"}
                            onClick={() => handleSelectTab(tab)}
                        >
                            <Redirect to={currentTab.routePage} />
                            {tab.name}
                        </button>
                    
                        <button
                            className={currentTab.name == tab.name ? "tab-delete active" : "tab-delete"}
                            onClick={() => handleDeleteTab(tab)}
                        >
                            <Redirect to={currentTab.routePage} />
                                X   
                        </button>
                    </li>
                );
                })}

            </ul>
            : <Redirect to={currentTab.routePage} />
    )
}
