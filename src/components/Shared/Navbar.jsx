import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { BiLogOut } from 'react-icons/bi';

import { Sidebar } from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { HideSidebar, HideSidebarUser, ShowSidebar, ShowSidebarUser } from '../../actions/sidebar';

export const Navbar = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.sidebar );
    const { sidebar, sidebarUser } = state;

    const showSidebar = () => {
        dispatch( ShowSidebar() );
    }

    const hideSidebar = () => {
        dispatch( HideSidebar() );
    }

    const showSidebarUser = () => {
        dispatch( ShowSidebarUser() );
    }

    const hideSidebarUser = () => {
        dispatch( HideSidebarUser() );
    }

    return (
        <>

            <IconContext.Provider value={{ color: '#ee7519' }}>

                <div className='vet_navbar'>
                    <Link to="#" className='vet_menu-bars'>
                        <FaBars
                        onClick={ showSidebar }
                        />
                    </Link>
                    
                    <span className='vet_nav-text-menu'>Menú</span>

                    <div className='vet_nav-menu-bars-right'>
                        <span className='vet_nav-text-right'
                            onClick={ showSidebarUser }
                        >
                            Carlos Pereira Coto
                        </span>
                    </div>
                </div>
                

                <nav className={ sidebar ? 'vet_nav-menu active' : 'vet_nav-menu' } >
                    <ul className='vet_nav-menu-items'>

                        <li className='vet_navbar-toggle'>
                            <Link to="#" className='vet_menu-bars' onClick={ hideSidebar }>
                                <AiOutlineClose />
                            </Link>
                        </li>

                        <Sidebar />
                    </ul>
                </nav>

                <nav className={ sidebarUser ? 'vet_nav-menu-user active' : 'vet_nav-menu-user' } >
                    <ul className='vet_nav-menu-items' onClick={ hideSidebarUser }>

                        <li className='vet_navbar-toggle-right'>
                            <Link to="#" className='vet_menu-bars-right'>
                                <AiOutlineClose />
                            </Link>
                        </li>

                        <li className="vet_nav-text_user">
                            <Link to="#">
                                <BiLogOut />
                                <span className='vet_nav-span'>Cerrar Session</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </IconContext.Provider>
        </>
    )
}
