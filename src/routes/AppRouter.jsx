import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

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
import { ReturnsPage } from '../components/Returns/ReturnsPage';
import { LocationsPage } from '../components/Locations/LocationsPage';
import { PresentationsPage } from '../components/Presentations/PresentationsPage';
import { CoinsPage } from '../components/Coins/CoinsPage';
import { WineriesPage } from '../components/Wineries/WineriesPage';
import { FamilyPage } from '../components/Family/FamilyPage';


export const AppRouter = () => {
  return (
    <Router>

        <Navbar />

        <Tabs />

        <div>
            <Switch>
                <Route 
                    exact
                    path="/initial"
                    component={ VetPage }
                />

                <Route 
                    exact
                    path="/initial/customers"
                    component={ CustomersPage }
                />

                <Route 
                    exact
                    path="/initial/inventory"
                    component={ InventoryPage }
                />

                <Route 
                    exact
                    path="/initial/cash/closecash"
                    component={ CloseCashPage }
                />

                <Route 
                    exact
                    path={`/initial/billing/:billingId`}
                    component={ BillingPage }
                />

                <Route 
                    exact
                    path="/initial/repayment"
                    component={ RepaymentPage }
                />

                <Route 
                    exact
                    path="/buys/buy"
                    component={ BuysPage }
                />

                <Route 
                    exact
                    path="/buys/providers"
                    component={ ProvidersPage }
                />

                <Route 
                    exact
                    path="/buys/inventoryadjustment"
                    component={ InventoryAdjustmentPage }
                />

                <Route 
                    exact
                    path="/buys/wineryadjustment"
                    component={ WineriesAdjustmentPage }
                />

                <Route 
                    exact
                    path="/buys/loans"
                    component={ LoansPage }
                />

                <Route 
                    exact
                    path="/sales/billing/:billingId"
                    component={ BillingPage }
                />

                <Route 
                    exact
                    path="/sales/collect"
                    component={ CollectPage }
                />

                <Route 
                    exact
                    path="/sales/pay"
                    component={ PaysPage }
                />

                <Route 
                    exact
                    path="/sales/adjustmentcollect"
                    component={ CollectAdjustmentPage }
                />

                <Route 
                    exact
                    path="/sales/payadjustment"
                    component={ PaysAdjustmentPage }
                />

                <Route 
                    exact
                    path="/sales/returns"
                    component={ ReturnsPage }
                />

                <Route 
                    exact
                    path="/parameters/settings"
                    component={ SettingsPage }
                />

                <Route 
                    exact
                    path="/parameters/locations"
                    component={ LocationsPage }
                />

                <Route 
                    exact
                    path="/parameters/presentations"
                    component={ PresentationsPage }
                />

                <Route 
                    exact
                    path="/parameters/coins"
                    component={ CoinsPage }
                />

                <Route 
                    exact
                    path="/parameters/wineries"
                    component={ WineriesPage }
                />

                <Route 
                    exact
                    path="/parameters/family"
                    component={ FamilyPage }
                />

                <Route 
                    exact
                    path="/reports"
                    component={ ReportsPage }
                />

                <Route 
                    exact
                    path="/nothing"
                    component={ NothingPage }
                />

                <Redirect to="/nothing" />

            </Switch>
        </div>
    </Router>
  )
}
