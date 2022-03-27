import { createStore, combineReducers } from 'redux';

import { tabsReducer } from '../reducers/tabsReducer';
import { InventoryReducer } from '../reducers/inventoryReducer';

const reducers = combineReducers({
    tabs: tabsReducer,
    inventory: InventoryReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);