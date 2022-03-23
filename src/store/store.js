import { createStore, combineReducers } from 'redux';

import { tabsReducer } from '../reducers/tabsReducer';

const reducers = combineReducers({
    tabs: tabsReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);