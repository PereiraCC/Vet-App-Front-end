import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { BsFillPeopleFill } from 'react-icons/bs';
import { CgPill } from 'react-icons/cg';
import { FaFileInvoiceDollar, FaMoneyCheck} from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { addTab } from '../../actions/tabs';

export const ShortcutsNavbar = () => {

    const dispatch = useDispatch();
    
    const handleAddTab = (title, path) => {
        dispatch( addTab(title, path) );
    }

    return (
        <div className='vet_nav-shortcuts'>

            <Link to='/initial/billing' >
                <FaFileInvoiceDollar onClick={ (e) => handleAddTab('Venta','/initial/billing') } id='iconVenta'/>
            </Link>

            <Link to='/initial/customers' >
                <BsFillPeopleFill onClick={ (e) => handleAddTab('Clientes','/initial/customers') } id='iconCliente'/>
            </Link>

            <Link to='/initial/cash/opencash' >
                <MdOutlineAttachMoney onClick={ (e) => handleAddTab('Apertura Caja','/initial/cash/opencash') } id='iconCaja'/>
            </Link>

            <Link to='/initial/inventory' >
                <CgPill onClick={ (e) => handleAddTab('Inventarios','/initial/inventory') } id='iconInventario'/>
            </Link>

            <Link to='/initial/billing' >
                <FaMoneyCheck onClick={ (e) => handleAddTab('Proformas o Cotización','/sales/budgets/proforma') } id='iconProforma'/>
            </Link>
            
        </div>
       
    )
}
