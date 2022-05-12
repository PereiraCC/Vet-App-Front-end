import { types } from '../types/types';

const initialState = {
    modalAddCustomerOpen: false,
    modalEditCustomerOpen: false,
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

        case types.billingOpenModelEditCustomer:
            return {
                ...state,
                modalEditCustomerOpen: true,
            }

        case types.billingCloseModelEditCustomer:
            return {
                ...state,
                modalEditCustomerOpen: false,
            }
    
        default:
            return state;
    }

}