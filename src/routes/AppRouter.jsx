import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { BillingPage } from '../components/Billing/BillingPage';
import { BuysPage } from '../components/Buys/BuysPage';
import { InventoryPage } from '../components/Inventory/InventoryPage';
import { ReportsPage } from '../components/Reports/ReportsPage';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route 
                    exact
                    path="/"
                    component={ BillingPage }
                />

                <Route 
                    exact
                    path="/inventory"
                    component={ InventoryPage }
                />

                <Route 
                    exact
                    path="/buys"
                    component={ BuysPage }
                />

                <Route 
                    exact
                    path="/reports"
                    component={ ReportsPage }
                />

                <Redirect to="/" />

            </Switch>
        </div>
    </Router>
  )
}
