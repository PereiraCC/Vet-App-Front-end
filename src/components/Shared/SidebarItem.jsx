import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HideSidebar } from '../../actions/sidebar';
import { addTab } from '../../actions/tabs';

export const SidebarItem = ({ item, index}) => {

    const [subnav, setSubnav] = useState(false);
    const showSubNav = () => setSubnav(!subnav);

    const [subnavIteams, setSubnavIteams] = useState(false);
    const showSubNavIteams = (subitem) => {
        switch (subitem.title) {
            case "Pedidos":
                showSubnavIteamsPedidos();
                break;

            case "Toma":
                showSubnavIteamsToma();
                break;

            case "Bodegas":
                showSubnavIteamsBodega();
                break;
        
            default:
                break;
        }
        setSubnavIteams(!subnavIteams);
    }

    const [subnavIteamsPedidos, setSubnavIteamsPedidos] = useState(false);
    const showSubnavIteamsPedidos = () => setSubnavIteamsPedidos(!subnavIteamsPedidos);

    const [subnavIteamsToma, setSubnavIteamsToma] = useState(false);
    const showSubnavIteamsToma = () => setSubnavIteamsToma(!subnavIteamsToma);

    const [subnavIteamsBodega, setSubnavIteamsBodega] = useState(false);
    const showSubnavIteamsBodega = () => setSubnavIteamsBodega(!subnavIteamsBodega);

    const dispatch = useDispatch();

    const stateTab = useSelector( state => state.tabs );
    const { currentTab } = stateTab;

    const handleAddTab = (subItem) => {
        dispatch( HideSidebar() );
        dispatch( addTab((subItem.title === 'Facturación') ? 'Venta' : subItem.title, subItem.path) );
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

                        subItem.subNavIteams 
                            ?   
                                <div key={index}>
                                    <div onClick={ (e) => showSubNavIteams(subItem) } className='vet_nav-sub-menu-sub'>
                                        {subItem.icon}
                                        <span className='vet_nav-span-sub-menu'>{subItem.title}</span>
                                        <div>
                                            { 
                                                subItem.subNavIteams && subnavIteams  
                                                ? item.iconOpened : subItem.subNavIteams 
                                                ? item.iconClosed : null 
                                            }
                                        </div>
                                    </div>

                                    {
                                        subnavIteams  && subItem.subNavIteams.map((subItem, index) => {
                                        
                                            if(subnavIteamsPedidos){

                                                if(subItem.title == 'Pedidos a Bodega' || subItem.title == 'Seguimiento Cotizaciones') {
                                                    
                                                    return (
                                                        <div onClick={ (e) => handleAddTab(subItem) } key={index}>
                                                            <Link to={currentTab.routePage} className='vet_nav-sub-menu-iteams' >
                                                                    {subItem.icon}
                                                                    <span className='vet_nav-span'>{subItem.title}</span>
                                                            </Link>
                                                        </div>
                                                    )
                                                }
                                            } else if(subnavIteamsBodega) {
                                                
                                                if(subItem.title == 'Ajuste Bodega' || subItem.title == 'Solicitud Bodega') {
                                                    
                                                    return (
                                                        <div onClick={ (e) => handleAddTab(subItem) } key={index}>
                                                            <Link to={currentTab.routePage} className='vet_nav-sub-menu-iteams' >
                                                                    {subItem.icon}
                                                                    <span className='vet_nav-span'>{subItem.title}</span>
                                                            </Link>
                                                        </div>
                                                    )
                                                }
                                            } else if(subnavIteamsToma) {
                                                if(subItem.title == 'Toma' || subItem.title == 'Pretoma' || subItem.title == 'Pretoma Fisica General') {
                                                    
                                                    return (
                                                        <div onClick={ (e) => handleAddTab(subItem) } key={index}>
                                                            <Link to={currentTab.routePage} className='vet_nav-sub-menu-iteams' >
                                                                    {subItem.icon}
                                                                    <span className='vet_nav-span'>{subItem.title}</span>
                                                            </Link>
                                                        </div>
                                                    )
                                                }
                                            }
                                            else {
                                                return (
                                                    <div onClick={ (e) => handleAddTab(subItem) } key={index}>
                                                        <Link to={currentTab.routePage} className='vet_nav-sub-menu-iteams' >
                                                                {subItem.icon}
                                                                <span className='vet_nav-span'>{subItem.title}</span>
                                                        </Link>
                                                    </div>
                                                )
                                            }
                                            
                                        })
                                    }
                                </div>
                            :   <div onClick={ (e) => handleAddTab(subItem) } key={index}>
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
