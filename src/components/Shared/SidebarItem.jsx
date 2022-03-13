import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarItem = ({ item }) => {
    return (
        <li className={item.cName}>
            <Link to={item.path}>
                {item.icon}
                <span className='vet_nav-span'>{item.title}</span>
            </Link>
        </li>
    )
}
