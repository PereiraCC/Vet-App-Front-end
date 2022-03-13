import * as AiIcons from 'react-icons/ai';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { MdInventory2 } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Facturación',
        path: '/billing',
        icon: <FaFileInvoiceDollar />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Inventarios',
        path: '/inventory',
        icon: <MdInventory2 />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Compras',
        path: '/buys',
        icon: <AiIcons.AiOutlineShoppingCart />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Reportes',
        path: '/reports',
        icon: <HiDocumentReport />,
        cName: 'vet_nav-text'
    },
];