import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineClose } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Sidebar } from './Sidebar';
import { HideSidebar, HideSidebarUser, ShowSidebar, ShowSidebarUser } from '../../actions/sidebar';
import { logout } from '../../actions/login';
import { DeleteAllTab } from '../../actions/tabs';
import { DateNavbar } from './DateNavbar';
import { ShortcutsNavbar } from './ShortcutsNavbar';

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

    const Logout = () => {
        dispatch( DeleteAllTab() );
        dispatch( logout() );
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

                        <div>
                            <ShortcutsNavbar />                            
                        </div>

                        <div className='vet_nav-date'>

                            <div className='vet_nav-date-fecha'>
                                <DateNavbar />
                            </div>

                            <div className='vet_nav-date-tipoCambio'>
                                <p>₡ 670</p>
                            </div>

                        </div>

                        <div className='vet_nav-text-right'>
                            <span>CP</span>
                        </div>

                        <div className='vet_nav-icon-right'>
                            <FaUserCircle onClick={ showSidebarUser } id='iconUser'/>
                        </div>

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
                            <a onClick={ Logout }>
                                <BiLogOut />
                                <span className='vet_nav-span'>Cerrar sesion</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </IconContext.Provider>
        </>
    )
}
