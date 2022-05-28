import { BsFillPeopleFill, BsFillFileEarmarkTextFill, BsFileCheckFill, BsFillPersonBadgeFill, BsCartCheckFill} from 'react-icons/bs';
import { CgPill } from 'react-icons/cg';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { HiDocumentReport, HiPresentationChartBar, HiLocationMarker } from 'react-icons/hi';
import { AiFillHome, AiFillSetting, AiOutlineShoppingCart, AiFillProfile, AiFillInteraction } from 'react-icons/ai';
import { FaFileInvoiceDollar, FaHandshake, FaCashRegister, FaCoins, FaMoneyBillAlt, FaMoneyCheckAlt} from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney, GiTakeMyMoney, GiFamilyTree, GiPowderBag} from 'react-icons/gi';
import { ImTable2 } from 'react-icons/im';
import { RiArrowDownSFill, RiArrowUpSFill, RiUserSettingsFill, RiMoneyDollarBoxFill, RiFilePaper2Fill} from 'react-icons/ri';
import { MdOutlineAttachMoney, MdOutlineMoneyOffCsred, MdAssignmentReturned, MdCategory, MdSdStorage, MdAssignmentReturn } from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/initial',
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        cName: 'vet_nav-text',
        subNav: [
            {
                title: 'Clientes',
                path: '/initial/customers',
                icon: <BsFillPeopleFill />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Inventarios',
                path: '/initial/inventory',
                icon: <CgPill />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Caja',
                path: '/initial/cash/closecash',
                icon: <FaCashRegister />,
                iconClosed: <RiArrowDownSFill />,
                iconOpened: <RiArrowUpSFill />,
                cName: 'vet_nav-text',
                subNavIteams: [
                    {
                        title: 'Apertura Caja',
                        path: '/initial/cash/opencash',
                        icon: <MdOutlineAttachMoney />,
                    },
                    {
                        title: 'Cierre Caja',
                        path: '/initial/cash/closecash',
                        icon: <MdOutlineMoneyOffCsred />,
                    },
                ]
            },
            {
                title: 'Facturación',
                path: '/initial/billing',
                icon: <FaFileInvoiceDollar />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Devoluciones',
                path: '/initial/repayment',
                icon: <MdAssignmentReturned />,
                cName: 'vet_nav-text'
            },
        ]
    },
    {
        title: 'Compras',
        path: '/buys',
        icon: <AiOutlineShoppingCart />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        cName: 'vet_nav-text',
        subNav: [
            {
                title: 'Compra',
                path: '/buys/buy',
                icon: <AiOutlineShoppingCart />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Proveedores',
                path: '/buys/providers',
                icon: <FaHandshake />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Pedidos',
                path: '/buys/orders/warehouseorders',
                icon: <FaMoneyCheckAlt />,
                iconClosed: <RiArrowDownSFill />,
                iconOpened: <RiArrowUpSFill />,
                cName: 'vet_nav-text',
                subNavIteams: [
                    {
                        title: 'Pedidos a Bodega',
                        path: '/buys/orders/warehouseorders',
                        icon: <BsFillFileEarmarkTextFill />,
                    },
                    {
                        title: 'Consultar Pedidos',
                        path: '/buys/orders/checkorders',
                        icon: <BsFileCheckFill />,
                    },
                ]
            },
            {
                title: 'Bodegas',
                path: '/buys/orders/wineryadjustment',
                icon: <FaMoneyCheckAlt />,
                iconClosed: <RiArrowDownSFill />,
                iconOpened: <RiArrowUpSFill />,
                cName: 'vet_nav-text',
                subNavIteams: [
                    {
                        title: 'Ajuste Bodega',
                        path: '/buys/wineryadjustment',
                        icon: <SiHomeassistantcommunitystore />,
                    },
                    {
                        title: 'Solicitud Bodega',
                        path: '/buys/requestWinery',
                        icon: <MdSdStorage />,
                    },
                ]
            },
            {
                title: 'Toma',
                path: '/buys/orders/wineryadjustment',
                icon: <FaMoneyCheckAlt />,
                iconClosed: <RiArrowDownSFill />,
                iconOpened: <RiArrowUpSFill />,
                cName: 'vet_nav-text',
                subNavIteams: [
                    {
                        title: 'Toma',
                        path: '/buys/wineryadjustment',
                        icon: <SiHomeassistantcommunitystore />,
                    },
                    {
                        title: 'Pretoma',
                        path: '/buys/requestWinery',
                        icon: <SiHomeassistantcommunitystore />,
                    },
                    {
                        title: 'Pretoma Fisica General',
                        path: '/buys/requestWinery',
                        icon: <SiHomeassistantcommunitystore />,
                    },
                ]
            },
            {
                title: 'Movimientos de articulos',
                path: '/buys/movementitems',
                icon: <BsCartCheckFill />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Orden de compra manual',
                path: '/buys/purchaseorder',
                icon: <RiFilePaper2Fill />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Devoluciones compra',
                path: '/buys/purchasereturns',
                icon: <MdAssignmentReturn />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Gastos',
                path: '/buys/inventoryadjustment', //TODO: CHANGLE LINK
                icon: <CgPill />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Ajuste Inventario',
                path: '/buys/inventoryadjustment',
                icon: <CgPill />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Abono Pagar',
                path: '/buys/pay',
                icon: <GiPayMoney />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Ajuste Pagar',
                path: '/buys/payadjustment',
                icon: <GiPayMoney />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Prestamos',
                path: '/buys/loans',
                icon: <GiReceiveMoney />,
                cName: 'vet_nav-text'
            },
        ]
    },
    {
        title: 'Ventas',
        path: '/sales',
        icon: <RiMoneyDollarBoxFill />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        cName: 'vet_nav-text',
        subNav: [
            {
                title: 'Facturación',
                path: '/sales/billing',
                icon: <FaFileInvoiceDollar />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Presupuestos',
                path: '/sales/budgets/proforma',
                icon: <FaMoneyCheckAlt />,
                iconClosed: <RiArrowDownSFill />,
                iconOpened: <RiArrowUpSFill />,
                cName: 'vet_nav-text',
                subNavIteams: [
                    {
                        title: 'Proformas o Cotización',
                        path: '/sales/budgets/proforma',
                        icon: <BsFillFileEarmarkTextFill />,
                    },
                    {
                        title: 'Seguimiento Cotizaciones',
                        path: '/sales/budgets/seguimiento',
                        icon: <BsFileCheckFill />,
                    },
                ]
            },
            {
                title: 'Agente de ventas',
                path: '/sales/salesagent',
                icon: <BsFillPersonBadgeFill />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Abono Cobrar',
                path: '/sales/collect',
                icon: <GiTakeMyMoney />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Ajuste Cobrar',
                path: '/sales/adjustmentcollect',
                icon: <GiTakeMyMoney />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Devoluciones',
                path: '/sales/repayment',
                icon: <MdAssignmentReturned />,
                cName: 'vet_nav-text'
            },
        ]
    },
    {
        title: 'Parametros',
        path: '/parameters',
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        icon: <RiUserSettingsFill />,
        cName: 'vet_nav-text',
        subNav: [
            {
                title: 'Configuración',
                path: '/parameters/settings',
                icon: <AiFillSetting />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Clientes Frecuentes',
                path: '/parameters/usualcustomers',
                icon: <BsFillPeopleFill />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Asignar Ficha Por Usuarios',
                path: '/parameters/assigntab',
                icon: <ImTable2 />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Tarifas',
                path: '/parameters/rates',
                icon: <FaMoneyBillAlt />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Ubicaciones',
                path: '/parameters/locations',
                icon: <HiLocationMarker />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Presentaciones',
                path: '/parameters/presentations',
                icon: <HiPresentationChartBar />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Monedas',
                path: '/parameters/coins',
                icon: <FaCoins />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Denominación monedas',
                path: '/parameters/denominationcoins',
                icon: <FaCoins />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Bodegas',
                path: '/parameters/wineries',
                icon: <SiHomeassistantcommunitystore />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Areas',
                path: '/parameters/wineries',
                icon: <SiHomeassistantcommunitystore />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Familias',
                path: '/parameters/family',
                icon: <GiFamilyTree />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Categorias',
                path: '/parameters/category',
                icon: <MdCategory />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Convertir Saco por Kilos',
                path: '/parameters/bagskilos',
                icon: <GiPowderBag />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Categoría de acción',
                path: '/parameters/actions',
                icon: <AiFillInteraction />,
                cName: 'vet_nav-text'
            },
            {
                title: 'Condicciones de Uso Firmado Contado',
                path: '/parameters/terms',
                icon: <AiFillProfile />,
                cName: 'vet_nav-text'
            },
        ]
    },
    {
        title: 'Reportes',
        path: '/reports',
        icon: <HiDocumentReport />,
        cName: 'vet_nav-text'
    },
];