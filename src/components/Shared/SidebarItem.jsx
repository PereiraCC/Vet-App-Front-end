import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTab } from '../../actions/tabs';

export const SidebarItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleAddTab = () => {
        dispatch( addTab(item.title, item.path) );
    }

    return (
        <li className={item.cName} onClick={ handleAddTab }>
            <Link to={item.path}>
                {item.icon}
                <span className='vet_nav-span'>{item.title}</span>
            </Link>
        </li>
    )
}
