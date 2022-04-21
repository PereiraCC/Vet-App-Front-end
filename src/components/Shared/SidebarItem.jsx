import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HideSidebar, HideSubNavInicio, ShowSubNavInicio } from '../../actions/sidebar';
import { addTab } from '../../actions/tabs';

export const SidebarItem = ({ item, index}) => {

    const [subnav, setSubnav] = useState(false);
    const showSubNav = () => setSubnav(!subnav);

    const dispatch = useDispatch();

    const stateTab = useSelector( state => state.tabs );
    const { currentTab } = stateTab;

    const handleAddTab = (subItem) => {
        dispatch( HideSidebar() );
        dispatch( addTab(subItem.title, subItem.path) );
    }

    return (
        <>

            <div key={ index } className={item.cName} onClick={ item.subNav ? showSubNav : (e) => handleAddTab(item) }>

                <div>
                    {item.icon}
                    <span className='vet_nav-span'>{item.title}</span>
                </div>
                <div>
                    { 
                        item.subNav && subnav  
                        ? item.iconOpened : item.subNav  
                        ? item.iconClosed : null 
                    }
                </div>
            </div>
            
            { 
                
                subnav  && item.subNav.map((subItem, index) => {
                    return (
                        <div onClick={ (e) => handleAddTab(subItem) } key={index}>
                            <Link to={currentTab.routePage} className='vet_nav-sub-menu' >
                                    {subItem.icon}
                                    <span className='vet_nav-span'>{subItem.title}</span>
                            </Link>
                        </div>
                    )
                })
            }

        </>
    )
}
