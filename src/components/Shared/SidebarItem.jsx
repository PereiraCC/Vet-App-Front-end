import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTab } from '../../actions/tabs';

export const SidebarItem = ({ item }) => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.tabs );
    const { currentTab } = state;

    const handleAddTab = () => {
        dispatch( addTab(item.title, item.path) );
    }

    return (
        <li className={item.cName} onClick={ handleAddTab }>
            <Link to={currentTab.routePage}>
                {item.icon}
                <span className='vet_nav-span'>{item.title}</span>
            </Link>
        </li>
    )
}
