import { createStore, combineReducers } from 'redux';

import { tabsReducer } from '../reducers/tabsReducer';
import { InventoryReducer } from '../reducers/inventoryReducer';
import { CustomersReducer } from '../reducers/customersReducer';
import { SettingsReducer } from '../reducers/settingsReducer';
import { SidebarReducer } from '../reducers/sidebarReducer';
import { loginReducer } from '../reducers/loginReducer';
import { PaysReducer } from '../reducers/paysReducer';

const reducers = combineReducers({
    tabs: tabsReducer,
    inventory: InventoryReducer,
    customers: CustomersReducer,
    settings: SettingsReducer,
    sidebar: SidebarReducer,
    login: loginReducer,
    pays: PaysReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);