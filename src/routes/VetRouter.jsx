import React from 'react';
import { Switch } from 'react-router-dom';

import { Navbar } from '../components/Shared/Navbar';
import { Tabs } from '../components/Shared/Tabs';

import { VetPage } from '../components/VetPage';
import { BillingPage } from '../components/Billing/BillingPage';
import { BuysPage } from '../components/Buys/BuysPage';
import { InventoryPage } from '../components/Inventory/InventoryPage';
import { ReportsPage } from '../components/Reports/ReportsPage';
import { NothingPage } from '../components/Shared/NothingPage';
import { ProvidersPage } from '../components/providers/ProvidersPage';
import { CustomersPage } from '../components/customers/CustomersPage';
import { SettingsPage } from '../components/Settings/SettingsPage';
import { CloseCashPage } from '../components/CloseCash/CloseCashPage';
import { RepaymentPage } from '../components/repayment/RepaymentPage';
import { InventoryAdjustmentPage } from '../components/InventoryAdjustment/InventoryAdjustmentPage';
import { WineriesAdjustmentPage } from '../components/WineriesAdjustment/WineriesAdjustmentPage';
import { LoansPage } from '../components/Loans/LoansPage';
import { CollectPage } from '../components/Collect/CollectPage';
import { PaysPage } from '../components/Pays/PaysPage';
import { CollectAdjustmentPage } from '../components/CollectAdjustment/CollectAdjustmentPage';
import { PaysAdjustmentPage } from '../components/PaysAdjustment/PaysAdjustmentPage';
import { LocationsPage } from '../components/Locations/LocationsPage';
import { PresentationsPage } from '../components/Presentations/PresentationsPage';
import { CoinsPage } from '../components/Coins/CoinsPage';
import { WineriesPage } from '../components/Wineries/WineriesPage';
import { FamilyPage } from '../components/Family/FamilyPage';
import { OpenCashPage } from '../components/OpenCash/OpenCashPage';
import { PrivateRoute } from './PrivateRoute';
import { CategoryPage } from '../components/Category/CategoryPage';
import { AssignTab } from '../components/AssignTab/AssignTab';
import { Rates } from '../components/Rates/Rates';
import { DenominationCoins } from '../components/DenominationCoins/DenominationCoins';
import { CategoryActions } from '../components/CategoryActions/CategoryActions';
import { Terms } from '../components/Terms/Terms';
import { UsualCustomersPage } from '../components/UsualCustomers/UsualCustomersPage';
import { ProformaPage } from '../components/Proforma/ProformaPage';
import { TrackingQuotesPage } from '../components/TrackingQuotes/TrackingQuotesPage';
import { SalesAgentPage } from '../components/SalesAgent/SalesAgentPage';
import { BagsKilosPage } from '../components/BagsKilos/BagsKilosPage';
import { WarehouseOrdersPage } from '../components/WarehouseOrders/WarehouseOrdersPage';
import { MovementItems } from '../components/MovementItems/MovementItems';

export const VetRouter = ({ isAuthenticated}) => {

    return (

        <div>

            <Navbar />

            <Tabs />

            <Switch>
                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/initial"
                    component={ VetPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/initial/customers"
                    component={ CustomersPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/initial/inventory"
                    component={ InventoryPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/initial/cash/opencash"
                    component={ OpenCashPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/initial/cash/closecash"
                    component={ CloseCashPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path={`/initial/billing/:billingId`}
                    component={ BillingPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/initial/repayment"
                    component={ RepaymentPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/buy"
                    component={ BuysPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/providers"
                    component={ ProvidersPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/orders/warehouseorders"
                    component={ WarehouseOrdersPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/orders/checkorders"
                    component={ WarehouseOrdersPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/inventoryadjustment"
                    component={ InventoryAdjustmentPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/wineryadjustment"
                    component={ WineriesAdjustmentPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/movementitems"
                    component={ MovementItems }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/pay"
                    component={ PaysPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/payadjustment"
                    component={ PaysAdjustmentPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/buys/loans"
                    component={ LoansPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/sales/billing/:billingId"
                    component={ BillingPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/sales/budgets/proforma"
                    component={ ProformaPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/sales/budgets/seguimiento"
                    component={ TrackingQuotesPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/sales/salesagent"
                    component={ SalesAgentPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/sales/collect"
                    component={ CollectPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/sales/adjustmentcollect"
                    component={ CollectAdjustmentPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/sales/repayment"
                    component={ RepaymentPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/settings"
                    component={ SettingsPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/usualcustomers"
                    component={ UsualCustomersPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/assigntab"
                    component={ AssignTab }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/rates"
                    component={ Rates }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/locations"
                    component={ LocationsPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/presentations"
                    component={ PresentationsPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/coins"
                    component={ CoinsPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/denominationcoins"
                    component={ DenominationCoins }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/wineries"
                    component={ WineriesPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/family"
                    component={ FamilyPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/category"
                    component={ CategoryPage }
                />

                <PrivateRoute   
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/bagskilos"
                    component={ BagsKilosPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/actions"
                    component={ CategoryActions }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/parameters/terms"
                    component={ Terms }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/reports"
                    component={ ReportsPage }
                />

                <PrivateRoute 
                    isAuthenticated={ isAuthenticated }
                    exact
                    path="/nothing"
                    component={ NothingPage }
                />

            </Switch>
        </div>
        
    );
};
