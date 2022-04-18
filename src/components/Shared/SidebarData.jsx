import { AiFillHome, AiFillSetting, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaFileInvoiceDollar, FaHandshake, FaCashRegister} from 'react-icons/fa';
import { MdInventory2 } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';
import { BsFillPeopleFill } from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiFillHome />,
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
        icon: <AiOutlineShoppingCart />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Reportes',
        path: '/reports',
        icon: <HiDocumentReport />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Proveedores',
        path: '/providers',
        icon: <FaHandshake />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Clientes',
        path: '/customers',
        icon: <BsFillPeopleFill />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Cierre de caja',
        path: '/closecash',
        icon: <FaCashRegister />,
        cName: 'vet_nav-text'
    },
    {
        title: 'Configuración',
        path: '/settings',
        icon: <AiFillSetting />,
        cName: 'vet_nav-text'
    },
];