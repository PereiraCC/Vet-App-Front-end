import { types } from '../types/types';

const initialState = {
    modalAddCustomerOpen: false,
};

export const BillingReducer = (state = initialState, action) => {

    switch ( action.type ) {

        case types.billingOpenModelAddCustomer:
            return {
               ...state,
                modalAddCustomerOpen: true,
            }

        case types.billingCloseModelAddCustomer:
            return {
                ...state,
                modalAddCustomerOpen: false,
            }
    
        default:
            return state;
    }

}