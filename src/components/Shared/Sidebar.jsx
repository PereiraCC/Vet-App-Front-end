import React from 'react';

import { SidebarData } from './SidebarData';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
    return (

        SidebarData.map((item, index) => (
          <SidebarItem key={index} index={index} item={item} class/>
        ))
      
    ) 
}
