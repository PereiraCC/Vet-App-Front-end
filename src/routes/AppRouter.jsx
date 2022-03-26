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


export const AppRouter = () => {
  return (
    <Router>

        <Navbar />

        <Tabs />

        <div>
            <Switch>
                <Route 
                    exact
                    path="/"
                    component={ VetPage }
                />

                <Route 
                    exact
                    path={`/billing/:billingId`}
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
